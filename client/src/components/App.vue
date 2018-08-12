<template>
  <div>
    <app-header/>
    <app-about/>
    <app-reviews/>
  </div>
</template>

<script>
 	 import Header from './app/Header.vue'
 	 import About from './app/About.vue'
 	 import Reviews from './app/Reviews.vue'

export default {
    components:{
      	'app-header': Header,
      	'app-about': About,
     	'app-reviews': Reviews
    },
}
</script>
<style slang="scss">

@import "../stylesheets/flexbox.scss";

	body{
		background-color: #1e1e1e;
		padding: 0;
		margin: 0 !important;
		font-family: 'Roboto', sans-serif;
		font-weight: 300;
	}
</style>