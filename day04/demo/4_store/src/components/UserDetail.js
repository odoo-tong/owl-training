import { Component, tags, hooks } from "@odoo/owl"

import Posts from "./Posts"

const { xml } = tags
const { useStore } = hooks

export default class UserDetail extends Component {
    static template = xml/* xml */`
    <div>
        <t t-if="state.user">
            <p>Welcome Back, <t t-esc="state.user.username" /></p>
            <p>Your email: <t t-esc="state.user.email" /></p>
            <Posts />
        </t>
        <t t-else="">
            <p>You haven't login yet!</p>
        </t>
    </div>`
    static components = { Posts }
    setup() {
        this.state = useStore((state) => state, { store: this.env.store.user })
    }
}
