/** @odoo-module **/

import Card from "../components/Card"

const { Component, tags } = owl
const { xml } = tags

export default class DashboardPage extends Component {
    static template = xml/* xml */`
    <Card>
        <h1>Welcome to Dashboard Page</h1>
    </Card>`
    static components = { Card }
}
