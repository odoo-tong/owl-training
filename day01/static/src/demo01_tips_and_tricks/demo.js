/** @odoo-module **/

const { Component, tags } = owl;

export class Demo extends Component {}

Demo.template = tags.xml/* xml */`
<h1>Title</h1>
<div class="row">
    <div class="col">
        <p>Body</p>
    </div>
</div>
`
