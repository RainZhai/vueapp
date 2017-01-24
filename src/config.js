export const API_ROOT = (process.env.NODE_ENV === 'production') ?
    'http://wandeme.com/' :
    'http://wandeme.com/'

export const CookieDomain = (process.env.NODE_ENV === 'production') ?
    '.wandeme.com' :
    ''