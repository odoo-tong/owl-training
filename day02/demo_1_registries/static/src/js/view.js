/** @odoo-module **/

import FormController from 'web.FormController'
import FormRenderer from 'web.FormRenderer'
import FormView from 'web.FormView'
import registry from 'web.view_registry'

const CustomFormView = FormView.extend({
    config: _.extend({}. FormView.prototype.config, {
        Renderer: FormRenderer,
        Controller: FormController,
    })
})

registry.add('custom_form', CustomFormView)
