import { Component, tags, mount, utils, useState } from "@odoo/owl";

const { xml, css } = tags

class App extends Component {
    static template = xml/* xml */`
    <div>
        Hello <span t-on-click.prevent="onClickText" t-esc="state.text" />
    </div>
    `
    setup() {
        this.state = useState({
            text: 'Owl'
        })
    }
    onClickText() {
        this.state.text = "Odoo"
    }
}

function setup() {
    mount(App, { target: document.body })
}

utils.whenReady(setup)
