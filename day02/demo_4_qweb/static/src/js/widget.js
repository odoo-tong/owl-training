/** @odoo-module **/

import { WebClient } from "@web/webclient/webclient";
import Widget from 'web.Widget'
import { patch } from "@web/core/utils/patch";

const Counter = Widget.extend({
    template: 'counter',
    xmlDependencies: ["/demo_4_qweb/static/src/xml/lazy_load_counter.xml"],
    events: {
        'click button': '_onClick',
    },
    init: function (parent, value) {
        console.log("Init");
        this._super(parent)
        this.count = value;
    },
    willStart: function() {
        console.log("Will Start");
        return this._super();
    },
    start: function() {
        console.log("Start");
        const self = this;
        return this._super().then(function() {
            self.$('.val').text(self.count);
        })
    },
    _onClick: function () {
        if (this.count === 10) {
            this.destroy()
            return
        }
        this.count++;
        this.$('.val').text(this.count);
    },
    destroy: function() {
        console.log("destroy");
        this._super();
    }
});

patch(WebClient.prototype, "mounted", {
    mounted() {
        this._super(...arguments)
        const counter = new Counter(this, 4)
        counter.appendTo('header')
    }
})

