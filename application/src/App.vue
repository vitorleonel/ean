<template>
  <router-view></router-view>
</template>

<style lang="scss">
  @import url('//fonts.googleapis.com/css?family=Poppins:300,400,700');
  @import url('//use.fontawesome.com/releases/v5.0.13/css/all.css');

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    font-size: 100%;
    color: #2d3436;
    background-color: rgba(223, 230, 233, 0.3);
    margin: 0;
  }

  .container {
    max-width: 90%;
    margin-left: auto;
    margin-right: auto;
  }

  .has-navbar {
    padding-top: 5rem;
  }

  .title {
    text-transform: uppercase;
    font-weight: 400;
  }

  .subtitle {
    color: #636e72;
  }
</style>

