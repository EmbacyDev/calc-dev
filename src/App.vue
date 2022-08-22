<template>
  <div class="menu">
    <router-link class="logo-w"
                 to="/">
      <img class="logo"
           alt="icon"
           src="./assets/images/png/embacy.png">
    </router-link> EmbacyDev
  </div>
  <router-view/>
</template>

<style lang="sass">
#app
  width: 100%
  height: 100%
  .menu
    padding: em(40) em(100) em(40) em(100)
    img
      width: em(20)
      height: em(20)
</style>
