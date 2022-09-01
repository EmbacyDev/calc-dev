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
  <main-footer/>
</template>

<style lang="sass">
#app
  width: 100%
  height: 100%
  .menu
    display: flex
    flex-direction: row
    flex-wrap: nowrap
    align-content: center
    justify-content: flex-start
    align-items: center
    padding: em(40) em(100) em(40) em(100)
    img
      width: em(20)
      height: em(20)
</style>
