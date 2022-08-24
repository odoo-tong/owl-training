{
    "name": "Mandalay Web",
    "version": "15.0.1.0.0",
    "summary": "Mandalay Web",
    "author": "Odoo PS",
    "website": "https://www.odoo.com",
    "license": "OEEL-1",
    "depends": [
        'portal',
    ],
    "data": [
        'views/webclient_templates.xml',
    ],
    "assets": {
        'web.assets_frontend': [
            "/mandalay_web/static/src/**/*.scss",
        ],
    }
}
