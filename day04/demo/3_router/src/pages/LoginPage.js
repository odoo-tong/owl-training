import { Component, tags } from "@odoo/owl"
import Card from "../components/Card"

const { xml } = tags

export default class LoginPage extends Component {
    static template = xml/* xml */`
    <Card>
        <h1>Welcome to Login Page</h1>
    </Card>`
    static components = { Card }
}
