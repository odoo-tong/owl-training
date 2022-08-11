import { Component, tags, hooks } from "@odoo/owl";

const { xml } = tags
const { useContext } = hooks

export default class Text extends Component {
    static template = xml/* xml */`
    <h1>You are logged in as <t t-esc="user.username"/></h1>
    `
    setup() {
        this.user = useContext(this.env.userContext)
    }
}
