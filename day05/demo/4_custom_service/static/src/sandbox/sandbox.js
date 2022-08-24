/** @odoo-module **/

import { useService } from "@web/core/utils/hooks"

const { Component, useState } = owl;
const { onMounted } = owl.hooks

export class Sandbox extends Component {
    setup() {
        this.cat = useService("cat")
        this.state = useState({
            cat: null
        })

        onMounted(() => {
            this.cat()
            .then(data => {
                this.state.cat = data
            })
        })
    }
}

Sandbox.template = "web.Sandbox"
