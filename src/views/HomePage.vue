<template>
  <section>
    <div class="page">
      <div class="container">
        <div class="header-w">
          <div class="info-w">
            <div class="h-w">
              <span class="before-text">H1.</span>
              <h1>Website configurator</h1>
            </div>
            <div class="text-w">
              <p><span class="before-text">Body text:</span>
                Hi, it is Embacy’s website<br>
                cofigurator that will help you<br>
                to get an idea of how your new website<br>
                can look like. Grab a coffee<br>
                and let’s tweak some knobs :)
              </p>
            </div>
          </div>
          <div class="main-img-w">
            <img class="main-img"
                 alt="icon"
                 src="../assets/images/png/embacyDev.png">
          </div>
        </div>
        <div class="btn-w">
          <router-link class="btn-link"
                       to="/calculator">Start building
          </router-link>
          <p class="subtitle-btn">(est. time 5-7 minutes)</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomePage'
};
</script>

<style lang="sass">
.header-w
  display: flex
  .h-w
    display: flex
    .before-text
      +h1internal($color: $or, $size: em(65))
  .text-w
    margin-top: em(32)
    +h3($size: em(30))
    .before-text
      color: $or
  .main-img-w
    margin-left: em(32)
    max-width: em(350)
    img
      animation-name: rotation
      animation-duration: 20s
      animation-iteration-count: infinite
      animation-timing-function: linear
      &:hover
        animation-duration: 2s
        transform: scale(0.9)
.btn-w
  display: flex
  align-content: center
  justify-content: center
  align-items: center
  flex-direction: column
  flex-wrap: nowrap
  margin-top: em(64)
  .btn-link
    box-shadow: em(1) em(2) em(10) 0 rgba(0, 0, 0, 0.3)
    text-transform: uppercase
    text-decoration: none
    background: $pur
    +body($size: em(24))
    color: $yel
    padding: em(30) em(70) em(30) em(70)
    border-radius: em(10)
    +baseAnimation
    &:hover
      background: $ored
      color: $milk
      box-shadow: em(0) em(0) em(10) 0 rgba(0, 0, 0, 0.5)
    &:active
      background: $yel
      color: $bl
      box-shadow: em(0) em(0) em(5) 0 rgba(0, 0, 0, 0.1)
      transform: scale(0.9)
  .subtitle-btn
    +body($color: $gr, $size: em(24))
    margin-top: em(8)

@include small-d
  .header-w
    display: flex
    flex-direction: column-reverse
    align-content: center
    justify-content: center
    align-items: center
    .h1-w
      display: flex
      .before-text
        +h1internal($color: $or, $size: px(65))
    .text-w
      margin-top: px(32)
      +h3($size: px(30))
    .main-img-w
      margin-bottom: px(32)
      max-width: px(150)
  .btn-w
    display: flex
    align-content: center
    justify-content: center
    align-items: center
    flex-direction: column
    flex-wrap: nowrap
    margin-top: px(64)
    .btn-link
      box-shadow: px(1) px(2) px(10) 0 rgba(0, 0, 0, 0.3)
      +body($size: px(24))
      padding: px(30) px(70) px(30) px(70)
      border-radius: px(10)
      +baseAnimation
      &:hover
        box-shadow: px(0) px(0) px(10) 0 rgba(0, 0, 0, 0.5)
      &:active
        box-shadow: px(0) px(0) px(5) 0 rgba(0, 0, 0, 0.1)
    .subtitle-btn
      +body($color: $gr, $size: px(24))
      margin-top: px(8)
@keyframes rotation
  0%
    transform: rotate(0deg) scale(1)
  100%
    transform: rotate(360deg) scale(0.9)

</style>
