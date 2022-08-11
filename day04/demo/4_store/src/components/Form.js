import { Component, tags, hooks, useState } from "@odoo/owl"

const { xml } = tags
const { useDispatch } = hooks

export default class Form extends Component {
    static template = xml/* xml */`
    <form t-on-submit.prevent="onSubmit">
        Username: <input type="text" t-model="state.formData.username" />
        Password: <input type="password" t-model="state.formData.password" />
        <button type="submit">Login</button>
    </form>`
    setup() {
        this.userDispatch = useDispatch(this.env.store.user)
        this.state = useState({
            formData: {
                username: null,
                password: null,
            }
        })
    }
    onSubmit(ev) {
        this.userDispatch('login', {
            username: this.state.formData.username,
            password: this.state.formData.password,
        })
    }
}
