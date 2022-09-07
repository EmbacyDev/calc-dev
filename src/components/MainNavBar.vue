<template>
  <nav class="menu">
    <a title="www.embacy.io"
       class="logo-w"
       href="https://www.embacy.io/">
      <img class="logo"
           alt="icon"
           src="../assets/images/png/embacy.png">
    </a>
    <div class="links-w">
      <a class="link"
         title="Back to www.embacy.io"
         @click="removeTotalAll"
         href="https://www.embacy.io/">
        <icon-base :iconWidth="24"
                   :iconHeight="24">
          <path stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21.664 12l-19.328 0m0 0L12.072 21.736M2.336 12l9.736-9.736"/>
        </icon-base>
        <span>Back to home</span>
      </a>
      <router-link class="link"
                   title="Restart calculator"
                   @click="removeTotalAll"
                   to="/">
        <icon-base :iconWidth="24"
                   :iconHeight="24">
          <path d="M19.683 13.854A7.775 7.775 0 1 1 11.908
        6.079h4.805l-2.783 2.791L15.018
        9.966l4.665-4.665-4.665-4.665-1.089 1.096L16.721
        4.524H11.908a9.33 9.33 0 1 0 9.33 9.33Z"/>
        </icon-base>
        <span>Restart</span>
      </router-link>
    </div>
  </nav>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'MainNavBar',
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    ...mapActions([
      'ALL_REMOVE_TOTAL'
    ]),
    removeTotalAll() {
      this.ALL_REMOVE_TOTAL();
    }
  }
};
</script>

<style lang="sass">
.menu
  display: flex
  flex-direction: row
  flex-wrap: nowrap
  align-content: center
  justify-content: space-between
  align-items: center
  padding: em(35) em(35) em(10) em(40)

  .logo-w
    z-index: 1

  .logo
    width: em(20)
    height: em(20)
  .links-w
    display: flex
    .link
      display: flex
      align-items: flex-start
      justify-content: center
      padding: em(10) em(40) em(10) em(40)
      border: none
      +body($size: em(16))
      +linkHover
      span
        margin-left: em(4)

//@include tablet-d
//  .menu
//    display: flex
//    flex-direction: row
//    flex-wrap: nowrap
//    align-content: center
//    justify-content: space-between
//    align-items: center
//    padding: em(35) em(35) em(10) em(40)
//    .logo-w
//      z-index: 1
//    .logo
//      width: em(20)
//      height: em(20)
//    .link
//      display: flex
//      align-items: center
//      justify-content: center
//      padding: em(10) em(40) em(10) em(40)
//      border: none
//      +body($size: em(16))
//      +linkHover

@include small-d
  .menu
    display: flex
    flex-direction: row
    flex-wrap: nowrap
    align-content: center
    justify-content: space-between
    align-items: center
    padding: px(35) px(16) px(35) px(16)
    .logo-w
      z-index: 1

    .logo
      width: px(20)
      height: px(20)
    .links-w
      display: flex
      .link
        display: flex
        align-items: flex-start
        justify-content: center
        padding: px(5) px(10) px(5) px(10)
        border: none
        +body($size: px(16))
        +linkHover
        span
          margin-left: px(4)

</style>
