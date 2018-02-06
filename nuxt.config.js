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
    title: 'Mark Hjorth - Software, Game, Web and Android App Development',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Mark Hjorth Does Software Development, Game Development, Android App Development, Web Development, Quality Assurance, Creates Distributed Systems, and more...' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
