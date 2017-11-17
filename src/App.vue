<template>
  <!-- id="app" is named from id="app" in index.html -->
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
// // ~ is an alias to `node_modules`
// // @ is alias defined in webpack.base.conf.js refer to `src` path
// // reference: https://github.com/webpack-contrib/sass-loader#imports

// // If we need to modify variables with existing variables,
// // we need to call this first
// @import "~bootstrap/scss/functions";
// @import "~bootstrap/scss/variables";
// @import "~bootstrap/scss/mixins";

// // This is how to modify bootstrap color using existing variables
// // and if you want to add new color
// $theme-colors: (
//   "primary": $red,
//   "awesome-color": #454545
// );

// // We need to call this again to override
// @import "~bootstrap/scss/bootstrap";

// // Use Sass Map to get the value of existing color variables
// .jumbotron {
//   background-color: map-get($theme-colors, "awesome-color");
// }
</style>
