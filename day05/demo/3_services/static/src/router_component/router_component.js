/** @odoo-module **/

import { useService } from "@web/core/utils/hooks"

const { Component, useState } = owl;

export class RouterComponent extends Component {
    setup() {
        this.router = useService('router')
        this.state = useState({
            route: null
        })
    }
    mounted () {
        this.state.route = this.router.current
        console.log(this.state.route);
    }
}

RouterComponent.template = "web.RouterComponent"
