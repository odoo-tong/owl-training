{
    'name': 'Tutorial theme',
    'description': 'A description for your theme.',
    'version': '1.0',
    'author': 'Your name',
    'category': 'Theme/Creative',

    'depends': ['website'],
    'data': [
        'views/layout.xml',

        'views/snippets/s_testimonial.xml',
        'views/snippets.xml',
    ],
    'assets': {
        'web.assets_frontend': [
            "/theme_tutorial/static/src/scss/style.scss",
        ],
        'web._assets_primary_variables': [
            "/theme_tutorial/static/src/scss/primary_variables.scss",
        ],
        'web._assets_frontend_helpers': [
            '/theme_tutorial/static/src/scss/bootstrap_overridden.scss',
        ],
    }
}
