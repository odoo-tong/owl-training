{
    "name": "Dashboard",
    "version": "15.0.1.0.0",
    "summary": "Dashboard",
    "author": "Odoo PS",
    "website": "https://www.odoo.com",
    "license": "OEEL-1",
    "depends": [
        'web',
        'portal',
    ],
    "data": [
        'views/webclient.xml',
    ],
    "assets": {
        'dashboard.assets': [
            '/dashboard/static/src/components/**/*.js',
            '/dashboard/static/src/pages/**/*.js',
        ],
        'dashboard.assets_backend_prod_only': [
            '/dashboard/static/src/router.js',
            '/dashboard/static/src/main.js',
        ],
    }
}
