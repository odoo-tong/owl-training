from odoo import http
from odoo.http import request


class Dashboard(http.Controller):
    # /dashboard, /dashboard/setting
    @http.route(['/dashboard', '/dashboard/<path:path>'], type='http', auth="user", website=True)
    def home(self, **kw):
        response = request.render('dashboard.frontend')
        response.headers['X-Frame-Options'] = 'DENY'
        return response
