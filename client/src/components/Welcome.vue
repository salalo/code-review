<template>
	<div>
		<welcome-header/>
		<welcome-info/>
	</div>
</template>

<script>

import Info from './welcome/Info.vue'
import Header from './welcome/Header.vue'

export default {
	components:{
    	'welcome-info': Info,
    	'welcome-header': Header
    }
}
</script>

<style lang="scss">

$white: #fafafa;
$yellow: rgb(255,152,0);
$lightGrey: rgb(99, 98, 98);
$grey: rgb(66,66,66);
$darkGrey: #202124;
$blue: rgb(68,138,255);


// SCROLLBAR
::-webkit-scrollbar{
	width: 10px;

	&-thumb{ background: $yellow; }
	&-track{ background: #151515; }
}
</style>