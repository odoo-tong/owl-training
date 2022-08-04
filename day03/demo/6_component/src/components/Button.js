import { Component, tags } from "@odoo/owl"

const { xml } = tags;


export default class Button extends Component {
    static template = xml/* xml */`
    <button t-on-click="onClick"><t t-esc="props.title" /></button>
    `
    static props = ["title"]
    static defaultProps = {
        title: "Default"
    }
    onClick(){
        this.trigger("click_button", "Child")
    }
}
