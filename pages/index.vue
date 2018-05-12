<template>
  <section class="container">
    <div>


	    <div class="card" v-for="post in posts" v-bind:key="post.category + '-' + post.slug">
	      <div class="card-image" itemscope itemtype="http://schema.org/ImageObject">
	        <nuxt-link :to="'./portfolio/' + post.category + '/' + post.slug">
	        	<img itemprop="url" :src="post.imageDir" :width="post.imageW" :height="post.imageH" :alt="post.postName">
	        	<meta itemprop="name" :content="post.postName">
	        	<meta itemprop="width" :content="post.imageW">
				<meta itemprop="height" :content="post.imageH">
			</nuxt-link>
	      </div>
	      <div class="card-info">
	        <div class="card-title">
	          <nuxt-link :to="'./portfolio/' + post.category + '/' + post.slug" :alt="post.postName">
	            <h3>{{post.postName}}</h3>
	          </nuxt-link>
	        </div>
	        <div class="card-category">
	          <nuxt-link to="./portfolio" alt="Portfolio">Portfolio</nuxt-link>
	          <span> / </span>
	          <nuxt-link :to="'./portfolio/' + post.category" :alt="post.categoryName">{{post.categoryName}}</nuxt-link>
	        </div>
	        <div class="card-date">{{post.date}}</div>
	      </div>
	    </div>


  </div>
  </section>
</template>

<!--  Aspect ratios
    1:1 - 720x720
    4:3 - 720x540
    16:10 - 720x450
    19:9 - 720x405
    2:1 - 720x360
-->

<script>
import posts from 'static/posts.json'

export default {
  head: {
    title: 'Mark Hjorth - Software, Game and Web Development'
  },
  data () {
    return { posts }
  }
}
</script>