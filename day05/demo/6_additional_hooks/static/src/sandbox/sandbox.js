/** @odoo-module **/

import { useAssets } from "@web/core/assets";
import { useEffect } from "@web/core/utils/hooks";

import { Popover } from "../popover/popover";

const { Component, useState } = owl;

export class Sandbox extends Component {
    setup() {
        // useAssets({
        //     jsLibs: ["/web/static/lib/Chart/Chart.js"],
        //     cssLibs: [],
        // });
        this.state = useState({
            value: true
        })
        useEffect(() => {
            console.log(`useEffect: ${this.state.value}`);
        },
        () => [this.state.value])
    }
    onClick() {
        this.state.value = !this.state.value
    }
}

Sandbox.template = "web.Sandbox"
Sandbox.components = {
    Popover
}
