/** @odoo-module **/

import { FieldChar } from 'web.basic_fields'
import registry from 'web.field_registry'


const Mixin = {
    print: function() {
        console.log("mixin");
    }
}


// Create new Field which has FieldChar properties and the Mixing properties
const FieldMixinNew = FieldChar.extend(Mixin, {
    start: function() {
        const self = this;
        return this._super().then(function () {
            self.print()
        })
    }
})

registry.add('mixin', FieldMixinNew)
