<template>
  <div id="page" class="wrapper">

    <navbar></navbar>

    <div id="content" class="content">
      <nuxt keep-alive/>
    </div>

    <nuxt-footer/>

  </div>
</template>

<script>
import Navbar from '~/components/Header.vue'
import NuxtFooter from '~/components/Footer.vue'
export default
{
  components:
  {
    Navbar,
    NuxtFooter
  }
}
</script>