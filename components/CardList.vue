<template>
	<div class="card-list">
		<div class="card" v-for="post in articlesList" v-bind:key="post.id">
			<div v-if="post.featuredMedia!= null" class="card-image" itemscope itemtype="http://schema.org/ImageObject">
				<nuxt-link :to="post.slug">
					<img itemprop="url"
					:src="post.featuredMedia.source_url"
					:width="post.featuredMedia.media_details.width"
					:height="post.featuredMedia.media_details.height"
					:alt="post.featuredMedia.alt_text">
					<meta itemprop="name" :content="post.featuredMedia.alt_text">
					<meta itemprop="width" :content="post.featuredMedia.media_details.width">
					<meta itemprop="height" :content="post.featuredMedia.media_details.height">
				</nuxt-link>
			</div>
			<div class="card-info">
				<div class="card-title">
					<nuxt-link :to="post.slug" :alt="post.title">
						<h3>{{post.title}}</h3>
					</nuxt-link>
				</div>
				<div class="card-date">{{post.date}}</div>
				<div class="card-category">
					<nuxt-link :to="post.categories[0].slug" alt="post.categories[0].name">{{post.categories[0].name}}</nuxt-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		computed: {
			articlesList() {
				return this.$store.state.articles
			}
		}
	};
</script>