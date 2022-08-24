{
    "name": "Owl Training Day 02 Exercise 2",
    "version": "15.0.1.0.0",
    "summary": "Owl Training Day 02 Exercise 2",
    "author": "Odoo PS",
    "website": "https://www.odoo.com",
    "license": "OEEL-1",
    "depends": [
        'web', 'stock'
    ],
    "data": [
        "views/product_views.xml",
    ],
    "assets": {
        'web.assets_qweb': [
            "/exercise_4_barcode_widget_owl/static/src/xml/barcode.xml",
        ],
        'web.assets_backend': [
            "/exercise_4_barcode_widget_owl/static/src/js/barcode.js",
            "/exercise_4_barcode_widget_owl/static/src/scss/barcode.scss",
        ],
    }
}
