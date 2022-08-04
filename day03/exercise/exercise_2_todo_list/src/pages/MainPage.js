import { Component, tags } from "@odoo/owl"
import List from "../components/List"

const { xml, css } = tags

export default class MainPage extends Component {
    static components = { List }
}

MainPage.template = xml/* xml */`
<div class="container">
    <List />
</div>
`

MainPage.style = css/* css */`
.container {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
`
