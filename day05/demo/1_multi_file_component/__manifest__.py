{
    "name": "Owl Training Day 5",
    "version": "15.0.1.0.0",
    "summary": "Owl Training Day 5",
    "author": "Odoo PS",
    "website": "https://www.odoo.com",
    "license": "OEEL-1",
    "depends": [
        'web',
    ],
    "assets": {
        'web.assets_qweb': [
            "/1_multi_file_component/static/src/**/*.xml",
        ],
        'web.assets_backend': [
            "/1_multi_file_component/static/src/**/*.scss",
            "/1_multi_file_component/static/src/sandbox/sandbox.js",
            "/1_multi_file_component/static/src/webclient.js",
        ],
    }
}
