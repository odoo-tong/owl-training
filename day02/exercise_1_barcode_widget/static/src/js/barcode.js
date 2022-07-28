/** @odoo-module **/

import { InputField } from 'web.basic_fields'
import core from 'web.core'
import registry from 'web.field_registry'

const _lt = core._lt;

const BarcodeChar = InputField.extend({
    description: _lt("Barcode"),
    tagName: 'img',
    className: 'o_field_barcode',
    supportedFieldTypes: ['char'],
    isQuickEditable: true,
    jsLibs: [
        "/exercise_1_barcode_widget/static/src/libs/JsBarcode.all.min.js",
    ],
    init: function () {
        this._super.apply(this, arguments);
        if (this.mode === 'edit') {
            this.tagName = 'input';
            this.className -= 'o_field_barcode'
        }
    },
    _render: function() {
        const def = this._super.apply(this, arguments);
        if (this.mode !== 'edit' && this.value) {
            this.$el.JsBarcode(this.value);
        }
        return def
    },
})

registry.add("barcode", BarcodeChar);
