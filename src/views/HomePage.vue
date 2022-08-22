<template>
  <div class="home-page">
    <div class="container">
      <h1>Тут начинается калькулятор</h1>
      <router-link class="btn-link"
                   to="/calculator">Start</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {}
};
</script>

<style scoped lang="sass">
.home-page
  display: flex
  align-items: flex-start
  justify-content: center
  height: auto

  .container
    background: white
    h1
      margin-bottom: 32px
    .btn-link
      display: flex
      align-items: center
      justify-content: center
      padding: 10px 40px 10px 40px
      background: #59b6a4
      border: 1px solid black
      border-radius: 10px
      &:hover
        border: 1px solid #59b6a4
        background: white

</style>
