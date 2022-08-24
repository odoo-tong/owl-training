/** @odoo-module **/

import { useService } from "@web/core/utils/hooks"

const { Component, useState } = owl;

export class HttpComponent extends Component {
    setup() {
        this.http = useService('http')
        this.state = useState({
            cat: null,
        })
    }
    // async willStart() {
    //     try {
    //         this.state.cat = await this.http.get('https://catfact.ninja/fact')
    //     } catch (e) {
    //         console.error(e);
    //     }
    // }
    mounted () {
        this.http.get('https://catfact.ninja/fact')
        .then(data => {
            this.state.cat = data
        })
        .catch(e => {
            console.error(e);
        })
    }
}

HttpComponent.template = "web.HttpComponent"
