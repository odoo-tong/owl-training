import { Component, tags, mount, utils } from "@odoo/owl";

const { xml } = tags

class App extends Component {
    static template = xml`<div>Hello Owl</div>`
}

function setup() {
    mount(App, { target: document.body })
}

utils.whenReady(setup)
