<template>
  <div>
    <app-header/>
    <app-about/>
    <app-reviews/>
  </div>
</template>

<script>
import Header from './hello/Header'
import About from './hello/About.vue'
import Reviews from './hello/Reviews.vue'

export default {
	name: 'app',
    components:{
    	'app-header': Header,
      	'app-about': About,
     	'app-reviews': Reviews
    },
}
</script>
<style lang="scss">
</style>