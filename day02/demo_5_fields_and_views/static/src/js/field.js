/** @odoo-module **/

import { FieldChar } from 'web.basic_fields'
import registry from 'web.field_registry'

const FieldCustom = FieldChar.extend({
    _render: function() {
        const def = this._super.apply(this, arguments);
        if (this.mode !== 'edit') {
            this.$el.prepend($("<span style='padding-right: 8px;'>Name:</span>"))
        }
        return def
    },
})

registry.add("custom", FieldCustom);
