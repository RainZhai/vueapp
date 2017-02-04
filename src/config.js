export const API_ROOT = (process.env.NODE_ENV === 'production') ?
    'http://127.0.0.1:3000/' :
    'http://127.0.0.1:3000/'

export const CookieDomain = (process.env.NODE_ENV === 'production') ?
    'wandeme.com' :
    ''