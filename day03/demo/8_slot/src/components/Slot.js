import { Component, tags } from "@odoo/owl";

const { xml } = tags;

export default class Props extends Component {
    static template = xml/* xml */`
        <div>
            <t t-slot="default" />
            <hr />
            <t t-slot="content">
                <p>Default Content</p>
            </t>
        </div>
    `
}
