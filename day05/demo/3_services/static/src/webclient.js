/** @odoo-module **/

import { HttpComponent } from "./http_component/http_component";
import { RouterComponent } from "./router_component/router_component";
import { NotificationComponent } from "./notification_component/notification_component";
import { ActionComponent } from "./action_component/action_component";
import { WebClient } from "@web/webclient/webclient";
import { patch } from "@web/core/utils/patch";

patch(WebClient, "static components", {
    components: {
        ...WebClient.components,
        HttpComponent,
        RouterComponent,
        NotificationComponent,
        ActionComponent,
    }
})
