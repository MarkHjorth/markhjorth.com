export const state = () => ({
	articles: []
});

export const mutations = {
	setArticles(state, data) {
		state.articles = data;
	}
};

export const actions = {
	async nuxtServerInit({ commit }) {
		var postList = (await this.$axios.get('https://markhjorth.com/wp-json/wp/v2/posts?per_page=100&_embed&_fields=id,date,slug,tags,link,title,categories,_links')).data;
		var articleList = [];

		function Article(id, date, slug, tags, link, title, featuredMedia, categories) {
			this.id = id;
			this.date = date;
			this.slug = slug;
			this.tags = tags;
			this.link = link;
			this.title = title;
			this.featuredMedia = featuredMedia;
			this.categories = categories;
		}

		for (var i = 0; i < postList.length; i++) {
			var id = postList[i].id
			var title = postList[i].title.rendered
			postList[i]["_embedded"]["wp:featuredmedia"][0].smush = null;
			postList[i]["_embedded"]["wp:featuredmedia"][0]["_links"] = null;
			var featuredMedia = postList[i]["_embedded"]["wp:featuredmedia"][0]
			var slug = postList[i].slug
			var tags = postList[i].tags
			var link = postList[i].link
			//Date:
			var date = postList[i].date
			if(date != null && date != "") {
				var dateObj = new Date(date)
				var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
				date = dateObj.toLocaleDateString('en-US', options)
			}

			//Categories
			var categories = postList[i].categories
			if(categories != null && categories.length > 0) {
				for (var k = 0; k < categories.length; k++) {
					var category = categories[k]
					if (category != null && category != "" && category != 0) {
						if (postList[i]["_embedded"]["wp:term"][k][0] != null) {
							postList[i]["_embedded"]["wp:term"][k][0]["_links"] = null
						}
						var categoryObj = postList[i]["_embedded"]["wp:term"][k][0]
						postList[i].categories[k] = categoryObj
					}
				}
			}
			categories = postList[i].categories

			var article = new Article(id, date, slug, tags, link, title, featuredMedia, categories);
			articleList.push(article);
		}

		commit('setArticles', articleList);
	}
};