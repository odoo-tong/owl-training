/** @odoo-module **/

import { usePosition } from '@web/core/position/position_hook';

const { Component } = owl;

export class Popover extends Component {
    setup() {
        usePosition(
            () => this.el.parentElement,
            {
                margin: 16,
                position: "right-end"
            }
        );
    }
}

Popover.template = "web.Popover"
