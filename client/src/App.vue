<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style lang="scss">

$white: #fafafa;
$main: rgb(255,152,0);
$grey: rgb(66,66,66);
$blue: rgb(68,138,255);

body{
	font-family: 'Roboto', sans-serif;
    background-color: $white;
    padding: 0 !important;
    margin: 0 !important;
}

</style>
