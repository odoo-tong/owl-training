import { Component, tags } from "@odoo/owl"

const { xml } = tags


export default class Child extends Component {
    static template = xml/* xml */`
    <div>
        <h2>Child</h2>
    </div>`
    setup() {
        console.log(this.env);
    }
}
