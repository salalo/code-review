<template>
	<div id="app">
		<router-view/>
 	</div>
</template>

<script>
export default {
	name: 'app',
}
</script>

<style slang="scss">

@import "./stylesheets/flexbox.scss";

	body{
		background-color: #1e1e1e;
		padding: 0;
		margin: 0 !important;
		font-family: 'Roboto', sans-serif;
		font-weight: 300;
	}
</style>