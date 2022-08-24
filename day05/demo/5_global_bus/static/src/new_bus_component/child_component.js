/** @odoo-module **/

const { Component } = owl
const { xml } = owl.tags

export class Child extends Component {
    onClick() {
        this.env.bus.trigger("PARENT_BUS")
    }
}

Child.template = xml/* xml */`
<div class="child">
    <button t-on-click="onClick">Click Me</button>
</div>
`
