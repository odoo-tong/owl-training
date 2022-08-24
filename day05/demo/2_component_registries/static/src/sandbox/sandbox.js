/** @odoo-module **/

import PosComponent from "point_of_sale.PosComponent"
import Registries from "point_of_sale.Registries"

export class Sandbox extends PosComponent {}

Sandbox.template = "pos.Sandbox"

Registries.Component.add(Sandbox)
