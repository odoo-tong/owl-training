import { Component, tags, hooks } from "@odoo/owl"

const { xml } = tags
const { useStore, useDispatch } = hooks

export default class DashboardPage extends Component {
    static template = xml/* xml */`
    <div class="row text-center">
        <t t-if="store.user">
            <h1>Welcome to Dashboard Page, <t t-esc="store.user.username" /></h1>
            <p>Your emails is <t t-esc="store.user.email" /></p>
        </t>
        <button t-on-click.prevent="() => dispatch('logout')" class="btn btn-primary">Logout</button>
    </div>`
    setup() {
        this.store = useStore((state) => state)
        this.dispatch = useDispatch()
    }
}
