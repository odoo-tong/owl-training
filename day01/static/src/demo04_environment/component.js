/** @odoo-module **/

const { Component, tags } = owl;

export class Environment extends Component {
    setup () {
        // debugger
        console.log(this.env);
    }
}

Environment.template = tags.xml`
<div class="envionment" />
`
