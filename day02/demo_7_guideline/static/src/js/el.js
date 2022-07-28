/** @odoo-module **/

import { FieldChar } from 'web.basic_fields'

// Incorrect
FieldChar.include({
    start: function() {
        this.$el.append("<p>Test</p>")
        return this._super()
    }
})

// Incorrect
FieldChar.include({
    start: function() {
        const def = this._super()
        this.$el.append("<p>Test</p>")
        return def
    }
})

// Correct
FieldChar.include({
    start: function() {
        const self = this;
        return this._super().then(() => {
            self.$el.append("<p>Test</p>")
        })
    }
})
