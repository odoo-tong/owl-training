/** @odoo-module **/

import { Environment } from "@day01/demo04_environment/component"
import { WebClient } from "@web/webclient/webclient";
import { patch } from "@web/core/utils/patch";

patch(WebClient, "static components", {
    components: {
        ...WebClient.components,
        Environment,
    }
})
