import { Component, tags } from "@odoo/owl";

const { xml } = tags;

export default class Props extends Component {
    static template = xml/* xml */`
        <p t-att-style="'font-size:' + props.size"><t t-esc="props.message" /></p>
    `
    static props = ['message', 'size?']
    static defaultProps = {
        size: 10
    }
}
