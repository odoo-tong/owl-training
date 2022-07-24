{
    "name": "Owl Training Day 01",
    "version": "15.0.1.0.0",
    "summary": "Owl Training Day 01",
    "author": "Odoo PS",
    "website": "https://www.odoo.com",
    "license": "OEEL-1",
    "depends": ["web", "web_enterprise"],
    "data": [],
    "assets": {
        "web.assets_qweb": [
            # "/day01/static/src/demo03_architecture/webclient.xml",
            "/day01/static/src/demo04_environment/webclient.xml",
        ],
        "web.assets_backend": [
            # "/day01/static/src/demo01_tips_and_tricks/debug_assets.js",
            # "/day01/static/src/demo02_javascript_module/plain_module.js",
            # "/day01/static/src/demo02_javascript_module/native_module.js",
            # "/day01/static/src/demo02_javascript_module/odoo_module.js",
            ('before', "web/static/src/webclient/**/*",  "/day01/static/src/demo04_environment/component.js",),
            ('before', "web/static/src/webclient/**/*",  "/day01/static/src/demo04_environment/webclient.js",),
        ],
    },
}
