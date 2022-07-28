{
    "name": "Barcode Widget",
    "version": "15.0.1.0.0",
    "summary": "Barcode Widget",
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
        'web.assets_backend': [
            "/exercise_1_barcode_widget/static/src/js/barcode.js",
            "/exercise_1_barcode_widget/static/src/scss/barcode.scss",
        ],
    }
}
