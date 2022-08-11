import { Component, tags } from "@odoo/owl"


const { xml, css } = tags

export default class Card extends Component {
    static template = xml/* xml */`
    <div class="card">
        <t t-slot="default" />
    </div>`
}

Card.style = css/* css */`
.card {
    border-radius: 16px;
    padding: 16px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
`
