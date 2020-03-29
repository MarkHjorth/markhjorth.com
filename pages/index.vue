<template>
  <section class="container">
    <div itemscope itemtype="http://schema.org/WebPage">



      <div class="card" v-for="post in posts" v-bind:key="post.id">
        <div v-if="post.featured_media.media_details != null" class="card-image" itemscope itemtype="http://schema.org/ImageObject">
          <nuxt-link :to="post.slug">
            <img itemprop="url"
            :src="post.featured_media.source_url"
            :width="post.featured_media.media_details.width"
            :height="post.featured_media.media_details.height"
            :alt="post.featured_media.alt_text">
            <meta itemprop="name" :content="post.featured_media.alt_text">
            <meta itemprop="width" :content="post.featured_media.media_details.width">
            <meta itemprop="height" :content="post.featured_media.media_details.height">
          </nuxt-link>
        </div>
        <div class="card-info">
          <div class="card-title">
            <nuxt-link :to="post.slug" :alt="post.title">
              <h3>{{post.title.rendered}}</h3>
            </nuxt-link>
          </div>
          <div class="card-date">{{post.date}}</div>
          <div class="card-category">
            <nuxt-link :to="post.categories[0].slug" alt="post.categories[0].name">{{post.categories[0].name}}</nuxt-link>
          </div>
        </div>
      </div>




    </div>
  </section>
</template>

<script>
  export default {
    async asyncData({ app }) {
      let posts = await app.$axios.$get('https://markhjorth.com/wp-json/wp/v2/posts?per_page=100&_embed')

      for (var i = 0; i < posts.length; i++) {
          //Date:
          var date = posts[i].date
          if(date != null && date != "") {
            var dateObj = new Date(date)
            var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
            var dateString = dateObj.toLocaleDateString('en-US', options)
            posts[i].date = dateString
          }

          //Categories
          var categories = posts[i].categories
          if(categories != null && categories.length > 0) {
            for (var k = 0; k < categories.length; k++) {
              var category = categories[k]
              if (category != null && category != "" && category != 0) {
                let categoryObj = posts[i]["_embedded"]["wp:term"][k][0]
                posts[i].categories[k] = categoryObj
              }
            }
          }

          //Media:
          var mediaId = posts[i].featured_media
          if(mediaId != null && mediaId != "") {
            let media = posts[i]["_embedded"]["wp:featuredmedia"][0]
            posts[i].featured_media = media
          }
        }

        return {
          posts
        }
      }
    }
  </script>