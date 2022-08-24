/** @odoo-module **/

import Card from "../components/Card"

const { Component, tags } = owl
const { xml } = tags

export default class DashboardDetailPage extends Component {
    static template = xml/* xml */`
    <Card>
        <h1>Welcome to Dashboard Detail Page</h1>
    </Card>`
    static components = { Card }
}
