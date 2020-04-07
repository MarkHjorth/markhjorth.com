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
		let postList = (await this.$axios.get('https://markhjorth.com/wp-json/wp/v2/posts?per_page=100&_embed&_fields=id,date,modified,slug,tags,link,title,content,categories,_links')).data;

		for (var i = 0; i < postList.length; i++) {
		//Fixing silly data structure:
		postList[i].title = postList[i].title.rendered
		postList[i].content = postList[i].content.rendered
		postList[i]["_embedded"]["wp:featuredmedia"] = postList[i]["_embedded"]["wp:featuredmedia"][0]
		postList[i]["_embedded"]["wp:featuredmedia"].title = postList[i]["_embedded"]["wp:featuredmedia"].title.rendered

		//Date:
		var date = postList[i].date
		if(date != null && date != "") {
			var dateObj = new Date(date)
			var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
			var dateString = dateObj.toLocaleDateString('en-US', options)
			postList[i].date = dateString
		}

		//Categories
		var categories = postList[i].categories
		if(categories != null && categories.length > 0) {
			for (var k = 0; k < categories.length; k++) {
				var category = categories[k]
				if (category != null && category != "" && category != 0) {
					let categoryObj = postList[i]["_embedded"]["wp:term"][k][0]
					postList[i].categories[k] = categoryObj
				}
			}
		}

		//Removing unused data:
		postList[i]["_links"] = null
		postList[i]["_embedded"]["author"] = null
		postList[i]["_embedded"]["wp:featuredmedia"].smush = null
		postList[i]["_embedded"]["wp:featuredmedia"].media_details.image_meta = null
		postList[i]["_embedded"]["wp:featuredmedia"]["_links"] = null
	}

	commit('setArticles', postList);
}
};