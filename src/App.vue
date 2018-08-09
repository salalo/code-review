<template>
  <div>
    <app-header></app-header>
    <app-about></app-about>
  </div>
</template>

<script>

  import Header from './components/Header.vue'
  import About from './components/About.vue'

  export default {
    components:{
      'app-header': Header,
      'app-about': About
    }
  }

</script>

<style lang="scss">

@import "./stylesheets/flexbox.scss";

  body{
    background-color:#f5f5f5;
    padding: 0;
    margin: 0 !important;
    font-family: 'Roboto', sans-serif;
  }

</style>
