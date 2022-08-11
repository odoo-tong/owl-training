import { Component, tags, hooks } from "@odoo/owl"

import Child from "./Child"

const { xml } = tags
const { useSubEnv } = hooks

export default class Parent extends Component {
    static template = xml/* xml */`
    <div>
        <h2>Parent</h2>
        <hr />
        <Child />
    </div>`
    static components = { Child }
    setup() {
        console.log(this.env);
        useSubEnv({ subEnv: true})
    }
}
