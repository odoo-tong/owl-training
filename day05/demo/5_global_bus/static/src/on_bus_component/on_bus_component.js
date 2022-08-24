/** @odoo-module **/

import { useBus, useService } from "@web/core/utils/hooks"

const { Component } = owl;

export class OnBusComponent extends Component {
    setup() {
        this.router = useService('router')
        useBus(this.env.bus, "ROUTE_CHANGE", event => {
            console.log(this.router.current.hash);
        });
    }
}

OnBusComponent.template = "web.OnBusComponent"
