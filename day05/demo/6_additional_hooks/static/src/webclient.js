/** @odoo-module **/

import { Sandbox } from "./sandbox/sandbox";
import { WebClient } from "@web/webclient/webclient";
import { patch } from "@web/core/utils/patch";

patch(WebClient, "static components", {
    components: {
        ...WebClient.components,
        Sandbox,
    }
})
