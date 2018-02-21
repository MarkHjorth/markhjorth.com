<template>
  <div id="page" class="wrapper">

    <header id="masterhead" class="header" role="banner">
        <h1 class="title">Mark Hjorth</h1>
        <h2 class="subtitle">Software, Game, Web and Android App Development</h2>
    </header>

    <div id="content" class="content">
      <nuxt keep-alive/>
    </div>

    <nuxt-footer/>

  </div>
</template>

<script>
import NuxtFooter from '~/components/Footer.vue'
export default
{
  components:
  {
    NuxtFooter
  }
}
</script>