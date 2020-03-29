import pkg from './package'
import axios from 'axios'

export default {
  mode: 'universal',

  env: {
    websiteUrl: "https://markhjorth.com"
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'Mark Hjorth - Software, Game and Web Development',

    meta: [
      { name: 'nativeUI', content: 'true' },
      { name: 'apple-mobile-web-app-capable', content: 'yes'},
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default'}
    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: 'https://beta.markhjorth.com' },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#4FC08D',
    failedColor: '#bf5050'
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
    // csp: true
  },

  /*
  ** Global CSS
  */
  css: [
  '~/assets/main.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** PWA Configuration
  */
  pwa: {
    manifest: {
      name: 'Mark Hjorth',
      short_name: "Mark Hjorth",
      start_url: "/"
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },

  /*
  ** Dynamic routes for generating
  */
  generate: {
    fallback: true,
    routes() {
    	function getPosts() {
		  return axios.get('https://markhjorth.com/wp-json/wp/v2/posts?_fields=slug&per_page=100')
	        .then((slugDataList) => {
	          return slugDataList.data.map((slugData) => {
	            return '/' + slugData.slug
	          })
	        })
		}

		function getPages() {
		  return axios.get('https://markhjorth.com/wp-json/wp/v2/pages?_fields=slug&per_page=100')
	        .then((slugDataList) => {
	          return slugDataList.data.map((slugData) => {
	            return '/' + slugData.slug
	          })
	        })
		}

		function getCategories() {
		  return axios.get('https://markhjorth.com/wp-json/wp/v2/categories?_fields=slug&per_page=100')
	        .then((slugDataList) => {
	          return slugDataList.data.map((slugData) => {
	            return '/' + slugData.slug
	          })
	        })
		}

		return axios.all([getPosts(), getPages(), getCategories()])
		  .then(axios.spread(function (posts, pages, categories) {
		  	let slugs = [...pages, ...posts, ...categories]
		    return slugs
		  }));
    }
  }

}