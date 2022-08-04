import { owl } from "@odoo/owl"

const { Component, tags, useState } = owl;
const { xml } = tags;

export class App extends Component {
    static template = xml`<div t-on-click="update">Hello <t t-esc="state.text"/></div>`;
    state = useState({ text: "Owl" });
    update() {
        this.state.text = this.state.text === "Owl" ? "World" : "Owl";
    }
}
