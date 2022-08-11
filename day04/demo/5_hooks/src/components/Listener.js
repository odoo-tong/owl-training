import { Component, tags, hooks, useState, utils } from "@odoo/owl";

const { xml, css } = tags
const { useExternalListener } = hooks
const { debounce } = utils

export default class Listener extends Component {
    static template = xml/* xml */`
    <div class="long">
        <div class="absolute">
            <h1 t-esc="state.scrollY" />
        </div>
    </div>`
    static style = css/* css */`
    .long {
        height: 5000px;
    }
    .absolute {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    `
    setup() {
        this.state = useState({
            scrollY: 0
        })
        // useExternalListener(window, 'scroll', this.updateScrollY)
        useExternalListener(window, 'scroll', debounce(this.updateScrollY, 50, true))
    }
    updateScrollY() {
        console.log("Scroll");
        this.state.scrollY = document.body.scrollTop;
    }
}
