import { Component, tags, hooks, useState } from "@odoo/owl"

const { xml } = tags
const { useRef } = hooks

export default class Ref extends Component {
    static template = xml/* xml */`
    <div>
        <input type="text" t-ref="text" />
        <button t-on-click.prevent="onClick">Button</button>
        <p t-esc="state.text" />
    </div>`
    setup() {
        this.textRef = useRef('text')
        this.state = useState({
            text: null
        })
    }
    onClick() {
        this.state.text = this.textRef.el.value
        console.log(this.textRef.el.value);
    }
}
