<template>
  <section class="has-navbar" id="search">
    <Navbar>
      <Search slot="search" />
    </Navbar>

    <div class="container">
      <i class="fas fa-meh fa-3x"></i>

      <h2 class="title">Desculpe!</h2>

      <p class="subtitle">Nenhum resultado com o termo <b>{{ search }}</b></p>
    </div>
  </section>
</template>

<script>
  import Navbar from '../../components/Navbar'
  import Search from '../../components/Search'

  export default {
    components: {
      Navbar,
      Search
    },

    data() {
      return {
        search: '1212'
      }
    },

    mounted() {
      this.getSearch()
    },

    methods: {
      getSearch() {
        this.search = this.$route.params.search.trim().replace(/-/g, ' ')
      }
    }
  }
</script>

<style lang="scss">
  .navbar {
    .search,
    .search:hover {
      padding: 0.35rem;
      border: 1px solid #ccc;
      box-shadow: none;

      button {
        font-size: 1.15rem;
        padding: 0.15rem 0.75rem;
      }

      input {
        padding: 0 0.5rem 0 0.15rem;
        font-size: 1.15rem;
      }
    }
  }

  #search {
    widows: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>


