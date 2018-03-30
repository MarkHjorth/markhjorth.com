module.exports = {

  /*
  ** Modules
  */
  modules: [
        '@nuxtjs/pwa',
    ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'Mark Hjorth - Software, Game and Web Development',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1'},
      { hid: 'description', name: 'description', content: 'Mark Hjorth Does Software Development, Game Development, Android App Development, Web Development, Quality Assurance, Creates Distributed Systems, and more...' },
      { name: 'nativeUI', content: 'true' },
      { name: 'HandheldFriendly', content: 'true' },
      { name: 'apple-mobile-web-app-capable', content: 'yes'},
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: 'https://beta.markhjorth.com' },
      { rel: 'apple-touch-startup-image', media: '(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 1)', href: './favicons/apple-touch-startup-image-320x460.png'},
      { rel: 'apple-touch-startup-image', media: '(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2)', href: './favicons/apple-touch-startup-image-640x920.png'},
      { rel: 'apple-touch-startup-image', media: '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)', href: './favicons/apple-touch-startup-image-640x1096.png'},
      { rel: 'apple-touch-startup-image', media: '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)', href: './favicons/apple-touch-startup-image-750x1294.png'},
      { rel: 'apple-touch-startup-image', media: '(device-width: 414px) and (device-height: 736px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 3)', href: './favicons/apple-touch-startup-image-1182x2208.png'},
      { rel: 'apple-touch-startup-image', media: '(device-width: 414px) and (device-height: 736px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3)', href: './favicons/apple-touch-startup-image-1242x2148.png'},
      { rel: 'apple-touch-startup-image', media: '(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 1)', href: './favicons/apple-touch-startup-image-748x1024.png'},
      { rel: 'apple-touch-startup-image', media: '(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 1)', href: './favicons/apple-touch-startup-image-768x1004.png'},
      { rel: 'apple-touch-startup-image', media: '(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 2)', href: './favicons/apple-touch-startup-image-1496x2048.png'},
      { rel: 'apple-touch-startup-image', media: '(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2)', href: './favicons/apple-touch-startup-image-1536x2008.png'},
    ]
  },
  /*
  ** Caching
  */
  render: {
    bundleRenderer: {
      cache: require('lru-cache')({
        max: 1000,
        maxAge: 1000 * 60 * 15
      })
    }
  },
  /*
  ** CSS
  */
  css: [
    '~/assets/main.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: {
    color: '#4FC08D',
    failedColor: '#bf5050',
    duration: 2500
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
