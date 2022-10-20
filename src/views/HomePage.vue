<template>
  <section>
    <div class="page">
      <div class="container">
        <div class="header-w">
          <div class="info-w">
            <div class="h-w">
              <h1>Сonfigurator</h1>
            </div>
            <div class="text-w">
              <p> Hi, it is embacy’s website configurator.
                If you wonder how a website may look like, grab some coffee and have fun 🙂
              </p>
            </div>
            <div class="btn-w">
              <router-link title="est. time 5-7 minutes"
                           class="btn-link"
                           to="/calculator">Start building
              </router-link>
            </div>
          </div>
          <div class="main-img-w">
            <img class="main-img"
                 alt="icon"
                 src="../assets/images/jpg/MainImg.jpg">
          </div>
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
  align-items: center
  .info-w
    .h-w
      display: flex
    .text-w
      margin-top: em(16)
      max-width: em(550)
      p
        +h4($size: em(20))
    .btn-w
      display: flex
      align-content: center
      justify-content: center
      align-items: flex-start
      flex-direction: column
      flex-wrap: nowrap
      margin-top: em(40)
      .btn-link
        text-decoration: underline
        +h3($size: em(30))
        +baseAnimation
        &:hover
          +h3($size: em(30), $color: $or)
  .main-img-w
    margin-left: em(135)
    max-width: em(555)

@include small-d
  .header-w
    display: flex
    align-items: center
    flex-direction: column
    margin-top: px(90)
    .info-w
      .h-w
        display: flex
      .text-w
        margin-top: px(16)
        max-width: px(310)
        p
          +h4($size: px(16))
      .btn-w
        display: flex
        align-content: center
        justify-content: center
        align-items: flex-start
        flex-direction: column
        flex-wrap: nowrap
        margin-top: px(8)
        .btn-link
          text-decoration: underline
          +h3($size: px(18))
          +baseAnimation
          &:hover
            +h3($size: px(18), $color: $or)
    .main-img-w
      margin-left: px(0)
      max-width: 100%
      margin-top: px(48)
</style>
