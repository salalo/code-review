<template>
  <div>
    <app-header></app-header>
    <app-about></app-about>
    <app-reviews></app-reviews>
  </div>
</template>

<script>
  //    <router-view/>
  
  import Header from './components/Header.vue'
  import About from './components/About.vue'
  import Reviews from './components/Reviews.vue'

export default {
    components:{
      'app-header': Header,
      'app-about': About,
      'app-reviews': Reviews,
    },
}
</script>

<style lang="scss">

@import "./stylesheets/flexbox.scss";

  body{
    background-color: #1e1e1e;
    padding: 0;
    margin: 0 !important;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
  }
</style>