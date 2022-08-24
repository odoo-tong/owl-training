/** @odoo-module **/

// import { useBus } from "@web/core/utils/hooks"

const { Component } = owl;
const { onMounted } = owl.hooks

export class TriggerBusComponent extends Component {
    setup() {
        onMounted(() => {
            this.env.bus.trigger("RPC:REQUEST")
            setTimeout(() => {
                this.env.bus.trigger("RPC:RESPONSE")
            }, 5000);
        })
    }
}

TriggerBusComponent.template = "web.TriggerBusComponent"
