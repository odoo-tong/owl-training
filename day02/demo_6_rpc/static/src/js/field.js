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
    start: function() {
        const prom = this._rpc({
            model: 'res.users',
            method: 'search',
            args: [[]],
        }).then(function (result) {
            console.log(result);
        })
        return Promise.all([
            this._super(),
            prom
        ])
    }
})

registry.add("custom", FieldCustom);
