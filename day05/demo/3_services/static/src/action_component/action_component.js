/** @odoo-module **/

import { useService } from "@web/core/utils/hooks"

const { Component } = owl;

export class ActionComponent extends Component {
    setup() {
        this.action = useService("action")
    }
    onClick () {
        this.action.doAction("base.open_module_tree", {
            additionalContext: {
                group_by: 'state'
            },
            clearBreadcrumbs: true,
        })
    }
}

ActionComponent.template = "web.ActionComponent"

// {
//     additionalContext: {
//         group_by: 'state'
//     },
//     clearBreadcrumbs: true,
// }
