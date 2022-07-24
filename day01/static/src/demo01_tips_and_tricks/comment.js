/** @odoo-module **/

const { Component, tags } = owl;

export class Demo extends Component {}

// eslint-disable-next-line no-inline-comments
Demo.template = tags.xml/* xml */`
<h1>Hello</h1>
<seciton>
    <div class="row">
        <div class="col">
            Hello Odoo
        </div>
    </div>
</seciton>
`
