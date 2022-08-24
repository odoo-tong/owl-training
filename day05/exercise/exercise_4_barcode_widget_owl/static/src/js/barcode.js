/** @odoo-module **/

const { useRef } = owl.hooks;
import AbstractField from 'web.AbstractFieldOwl'
import { _lt } from 'web.translation'
import registry from 'web.field_registry_owl'
import { useAssets } from "@web/core/assets";
import utils from 'web.utils'


class FieldBarcode extends AbstractField {
    setup() {
        this._id = `barcode-${utils.generateID()}`;

        this.imgRef = useRef('img')
        this.inputRef = useRef('input')

        useAssets({
            jsLibs: ["/exercise_4_barcode_widget_owl/static/src/libs/JsBarcode.all.min.js"]
        });
    }
    mounted() {
        if (this.imgRef.el && this.value) {
            $(this.imgRef.el).JsBarcode(this.value)
        }
    }
    commitChanges() {
        if (this.mode === 'edit') {
            return this._setValue(this.inputRef.el.value);
        }
    }
}
FieldBarcode.description = _lt("Barcode");
FieldBarcode.supportedFieldTypes = ['char'];
FieldBarcode.template = 'web.FieldBarcode';
FieldBarcode.isQuickEditable = true;

registry.add("barcode_owl", FieldBarcode);
