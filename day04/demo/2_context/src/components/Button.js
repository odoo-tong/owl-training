import { Component, tags, hooks } from "@odoo/owl"

const { xml } = tags;
const { useContext } = hooks;


export default class Button extends Component {
    static template = xml/* xml */`
    <button t-on-click="onClick"><t t-esc="props.title" /></button>
    `
    static props = ["title"]
    static defaultProps = {
        title: "Default"
    }
    onClick(){
        const user = useContext(this.env.userContext)
        user.username = "New Name"
    }
}
