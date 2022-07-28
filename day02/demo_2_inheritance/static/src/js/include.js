/** @odoo-module **/

import { FieldChar } from 'web.basic_fields'

// Monkey Patching
FieldChar.include({
    start: function() {
        return this._super().then(function () {
            console.log('start');
        })
    }
})
