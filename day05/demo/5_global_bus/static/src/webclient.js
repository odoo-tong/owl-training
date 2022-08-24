/** @odoo-module **/

import { TriggerBusComponent } from "./trigger_bus_component/trigger_bus_component";
import { OnBusComponent } from "./on_bus_component/on_bus_component";
import { NewBusComponent } from "./new_bus_component/new_bus_component";
import { WebClient } from "@web/webclient/webclient";
import { patch } from "@web/core/utils/patch";

patch(WebClient, "static components", {
    components: {
        ...WebClient.components,
        TriggerBusComponent,
        OnBusComponent,
        NewBusComponent,
    }
})
