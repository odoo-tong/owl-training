/** @odoo-module **/

import { useBus } from "@web/core/utils/hooks"
import { Child } from "./child_component";

const { Component } = owl

export class NewBusComponent extends Component {
    setup() {
        useBus(this.env.bus, "PARENT_BUS", this.func);
    }
    func() {
        console.log("Parent is called");
    }
}

NewBusComponent.template = "web.NewBusComponent"
NewBusComponent.components = {
    Child
}
