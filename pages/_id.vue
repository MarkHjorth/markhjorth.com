<template>
  <section class="container">
    <div itemscope itemtype="http://schema.org/Article">

      <h1 itemprop="headline">{{data[0].title.rendered}}</h1>
      <div itemprop="image" v-if="data[0].featured_media.media_details != null" itemscope itemtype="http://schema.org/ImageObject">
        <img itemprop="url"
        loading="lazy"
        :src="data[0].featured_media.source_url"
        :width="data[0].featured_media.media_details.width"
        :height="data[0].featured_media.media_details.height"
        :alt="data[0].featured_media.alt_text">
        <meta itemprop="name" :content="data[0].featured_media.alt_text">
        <meta itemprop="width" :content="data[0].featured_media.media_details.width">
        <meta itemprop="height" :content="data[0].featured_media.media_details.height">
      </div>
      <span itemprop="datePublished">{{data[0].date}}</span>
      <meta itemprop="dateModified" :content="data[0].modified">
      <meta itemprop="mainEntityOfPage" :content="data[0].link">
      <div v-if="data[0].content != null">
        <span v-html="data[0].content.rendered"></span>
      </div>
      <div v-else-if="data[0].description != null">
        <span v-html="data[0].description"></span>
      </div>

    </div>
  </section>
</template>

<script>
  export default {
    validate({ params }) {
      return (params)
    },
    async asyncData({ params, error, app }) {
      try {
        var data = await app.$axios.$get('https://markhjorth.com/wp-json/wp/v2/posts?_embed&slug=' + params.id)
        if (data[0] == null) {
          data = await app.$axios.$get('https://markhjorth.com/wp-json/wp/v2/pages?_embed&slug=' + params.id)
        }
      //date
      if (data[0] != null) {
        var date = data[0].date
        if(date != null && date != "") {
          var dateObj = new Date(date)
          var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
          var dateString = dateObj.toLocaleDateString('en-US', options)
          data[0].date = dateString
        }

        //Media
        var mediaId = data[0].featured_media
        if(mediaId != null && mediaId != "") {
          let media = data[0]["_embedded"]["wp:featuredmedia"][0]
          data[0].featured_media = media
        }

        let title = data[0].title.rendered + " - Mark Hjorth"

        return {data, title}
      } else {
        error({ message: 'Page not found 🙁', statusCode: 404 })
      }
    } catch (e) {
      console.log("Exception: " + e)
      error({ message: 'An unknown error occoured', statusCode: 500 })
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>