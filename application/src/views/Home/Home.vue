<template>
  <section id="home">
    
    <Search />

  </section>
</template>

<script>
  import Search from '../../components/Search'

  export default {
    components: {
      Search
    }
  }
</script>

<style lang="scss" scoped>
  #home {
    height: 100vh;
    background-color: #ffd700;
    background-image: url('/assets/background.jpg');
    background-position: center;
    background-size: cover;

    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
