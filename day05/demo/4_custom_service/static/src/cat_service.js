/** @odoo-module **/

import { registry } from "@web/core/registry"

export const catService = {
    dependencies: ["http"], // http_service -> cat_service
    async: true,
    start(env, { http }) {
        return function cat() {
            return http.get('https://catfact.ninja/fact')
        }
    }
}



registry.category("services").add("cat", catService)
