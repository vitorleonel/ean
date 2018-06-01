<template>
  <div class="navbar">
    <div class="container">

      <router-link :to="{ name: 'app.home.index' }" class="brand">
        <h1 class="title">Global Code</h1>
      </router-link>

      <slot name="search"></slot>  

    </div>
  </div>
</template>

<style lang="scss">
  .navbar {
    width: 100vw;
    min-height: 4.25rem;
    background-color: white;
    box-shadow: 0 1px 15px 1px rgba(69, 65, 78, 0.1);
    position: fixed;
    top: 0;

    .container {
      display: flex;
      align-items: center;
    }

    .brand {
      margin-right: 4rem;
      color: initial;
      text-decoration: none;
    }
  }
</style>

