/** @odoo-module **/

import { FieldChar } from 'web.basic_fields'
import registry from 'web.field_registry'

// Create new Field which has FieldChar properties
const FieldNew = FieldChar.extend({
    tagName: 'div',
    // <div class="o_field_char"></div>
})

registry.add('new', FieldNew)
