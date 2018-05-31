<template>
  <div class="container">
    <search />
  </div>
</template>

<script>
  import Search from './components/Search'

  export default {
    components: {
      Search
    }
  }
</script>

<style lang="scss">
  @import url('//fonts.googleapis.com/css?family=Poppins:300,400,700');
  @import url('//use.fontawesome.com/releases/v5.0.13/css/all.css');

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    font-size: 100%;
    background-color: #ffd700;
    background-image: url('/assets/background.jpg');
    background-position: center bottom;
    margin: 0;
  }

  .container {
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

