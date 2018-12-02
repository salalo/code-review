<template>
	<div>
		<welcome-header/>
	</div>
</template>

<script>
import Header from './welcome/Header.vue'

export default {
	components:{
    	'welcome-header': Header,
    }
}
</script>