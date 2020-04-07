<template>
  <section class="container">
    <div itemscope itemtype="http://schema.org/WebPage">

      <CardList/>

    </div>
  </section>
</template>

<script>
  import CardList from '~/components/CardList';

  export default {
    components: {
      CardList
    }
  }
</script>