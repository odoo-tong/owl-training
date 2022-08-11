import { Component, tags, hooks, useState } from "@odoo/owl"

import apiStates from "../../constants/apiStates"

const { xml } = tags
const { useDispatch, useStore } = hooks

export default class LoginPage extends Component {
    static template = xml/* xml */`
    <div>
        <div class="row">
            <div class="mb-3">
                <h1>Login</h1>
            </div>
            <div t-if="store.loginState === apiStates.ERROR" class="alert alert-danger fade show" role="alert">
                <t t-esc="store.errorMsg" />
            </div>
        </div>
        <form class="row g-3" t-on-submit.prevent="onLogin">
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="text" class="form-control" id="email" placeholder="example@test.com" t-model="state.form.email" />
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" placeholder="test" t-model="state.form.password" />
            </div>
            <div class="mb-3 text-center">
                <button type="submit" class="btn btn-primary mb-3">Login</button>
            </div>
        </form>
    </div>`
    setup() {
        this.store = useStore((state) => state)
        this.dispatch = useDispatch()
        this.state = useState({
            form: {
                email: null,
                password: null,
            }
        })
        this.apiStates = apiStates
    }
    onLogin(){
        this.dispatch('login', {
            email: this.state.form.email,
            password: this.state.form.password,
        })
    }
}
