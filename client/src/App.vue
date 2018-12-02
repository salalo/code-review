<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">

@import './stylesheets/_variables.scss';
@import './stylesheets/_mixins.scss';

body { @include text-select(none); }

// SCROLLBAR
::-webkit-scrollbar{
	width: 10px;

	&-thumb{ background: $yellow; }
	&-track{ background: #151515; }
}
</style>