{
    "name": "Owl Training Day 5",
    "version": "15.0.1.0.0",
    "summary": "Owl Training Day 5",
    "author": "Odoo PS",
    "website": "https://www.odoo.com",
    "license": "OEEL-1",
    "depends": [
        'point_of_sale',
    ],
    "assets": {
        'web.assets_qweb': [
            "/2_component_registries/static/src/**/*.xml",
        ],
        'point_of_sale.assets': [
            "/2_component_registries/static/src/**/*.scss",
            "/2_component_registries/static/src/sandbox/sandbox.js",
        ],
    }
}
