<template>
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header class="mdl-layout__header">
            <div class="mdl-layout__header-row">
                <!-- Title -->
                <span class="mdl-layout-title">Code-Review</span>
                <!-- Add spacer, to align navigation to the right -->
                <div class="mdl-layout-spacer"></div>
                <nav class="mdl-navigation">
                    <a class="mdl-navigation__link" href="">Log In</a>
                    <a class="mdl-navigation__link" href="">Sign In</a>
                </nav>
            </div>
        </header>
        <div class="info">
            <div class="info__text">
                <h1>With us you can</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">

$white: #fafafa;
$yellow: rgb(255,152,0);
$grey: rgb(66,66,66);
$darkGrey: #202124;
$blue: rgb(68,138,255);

.info{
    background-color: $darkGrey;
    color: $white;
    height: 700px;
}
.info__text{
    padding-top: 100px;
    text-align: center;
}

</style>
