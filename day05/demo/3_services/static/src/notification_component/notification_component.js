/** @odoo-module **/

import { useService } from "@web/core/utils/hooks"

const { Component } = owl;

export class NotificationComponent extends Component {
    setup() {
        this.notification = useService("notification")
        this.action = useService("action")
    }
    mounted () {
        this.notification.add("I'm a very simple notification", {
            title: "Action",
            buttons: [
                {
                    name: "See all apps",
                    onClick: () => {
                        this.action.doAction("base.open_module_tree")
                    }
                }
            ]
        });
    }
}

NotificationComponent.template = "web.NotificationComponent"
