<template>
  <form class="search" @submit.prevent="submitForm">
    <input type="text" placeholder="Que produto você esta procurando hoje?">

    <button>
      <i class="fas fa-search"></i>
    </button>
  </form>
</template>

<script>
  export default {
    methods: {
      submitForm() {}
    }
  }
</script>


<style lang="scss">
  .search {
    width: 30vw;
    padding: 0.5rem;
    background-color: white;
    box-shadow: 0 1px 15px 1px rgba(69, 65, 78, 0.2);
    border-radius: 6px;
    position: relative;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    &:hover {
      box-shadow: 0 1px 20px 1px rgba(69, 65, 78, 0.4);
    }

    input,
    button {
      font-family: 'Poppins', sans-serif;
      font-size: 1.25rem;
      font-weight: 400;
      padding: 0.5rem 1.25rem;
      outline: none;
    }

    input {
      width: 100%;
      padding-left: 0.35rem;
      border-color: transparent;
      color: #636e72;

      &::placeholder {
        color: lighten(#636e72, 40);
      }
    }

    button {
      border: 1px solid darken(#2d3436, 10);
      background-color: lighten(#2d3436, 10);
      color: white;
      border-radius: 6px;

      &:hover,
      &:focus {
        background-color: #2d3436;
        cursor: pointer;
      }
    }
  }
</style>

