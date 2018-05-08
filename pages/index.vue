<template>
  <section class="container">
    <div>


	    <div class="card" v-for="post in portfolioPosts" v-bind:key="post.category + '-' + post.slug">
	      <div class="card-image">
	        <nuxt-link :to="'./portfolio/' + post.category + '/' + post.slug"><img :src="post.imageDir" :width="post.imageW" :height="post.imageH" :alt="post.postName"></nuxt-link>
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
export default {
  head: {
    title: 'Mark Hjorth - Software, Game and Web Development'
  },
  data: () => ({
    portfolioPosts: [
      {
        postName: 'Art By CH Website',
        title: 'Art By CH Website, Portfolio and Webshop',
        category: 'websites',
        categoryName: 'Websites',
        slug: 'art-by-ch-website',
        imageDir: 'art-by-ch.jpg',
        imageH: '540',
        imageW: '720',
        content: 'Art By CH is a website with the possibility to see and buy art from Christina Thomsen. On the site you will find anything from paintings to ceramic, along with the original works or prints. Christina’s works are primarily painted with watercolours and acrylic paint. Her works has focus on the human and what is happening around us. Human emotions play a big part and every picture has its own story, which is also present in her works in what colours and expressions she uses. The works should be able to speak for itself.'
      },
      {
        postName: 'Plai Internship',
        title: 'My Plai Internship as a full stack developer and what I\'ve learned',
        category: 'software-development',
        categoryName: 'Software Development',
        slug: 'plai-internship',
        imageDir: 'plai-logo.jpg',
        imageH: '540',
        imageW: '720',
        content: 'For the past month I have been an intern at Plai. It has been a great experience where I got to dive into full stack development of a gaming platform. I had such a great time at Plai, and although being done with the internship is sad, I want to focus on how good an experience it has been for me.'
      },
      {
        postName: 'Blomsterhaven Aalborg Website',
        title: 'Private Daycare Blomsterhaven Aalborg Website',
        category: 'websites',
        categoryName: 'Websites',
        slug: 'blomsterhaven-aalborg-website',
        imageDir: 'blomsterhaven.jpg',
        imageH: '540',
        imageW: '720',
        content: 'This website was created for the Aalborg based daycare Blomsterhaven Aalborg.'
      },
      {
        postName: 'LMP24 Slot Racing Website',
        title: 'LMP24 Slot Racing Website',
        category: 'websites',
        categoryName: 'Websites',
        slug: 'lmp24-slot-racing-website',
        imageDir: 'lmp24.jpg',
        imageH: '540',
        imageW: '720',
        content: 'LMP24 is a website for slot racing.'
      },
      {
        postName: 'Legends Dawn: Goblins of Ruin RPG mobile game',
        title: 'Legends Dawn: Goblins of Ruin RPG mobile game',
        category: 'games',
        categoryName: 'Games',
        slug: 'goblins-ruin-rpg-mobile-game',
        imageDir: 'goblins_of_ruins.jpg',
        imageH: '540',
        imageW: '720',
        content: 'Legends Dawn Goblins of Ruin is a mini indie RPG mobile game for Android with focus on loot progression and beautiful pixel artwork.'
      },
      {
        postName: 'Haunted House Online Slot Machine Game',
        title: 'Haunted House Online Slot Machine Game',
        category: 'games',
        categoryName: 'Games',
        slug: 'haunted-house-slot-machine-game',
        imageDir: 'hauntedhouse.jpg',
        imageH: '540',
        imageW: '720',
        content: 'Haunted House is an online slot machine game with 9 reels. The game offers 2 progressive jackpots along with 3 thrilling bonus games; “Beware of Dog”, “Spooky Rooms” and “Haunted Hallways”.'
      }
    ]
  }),
}
</script>