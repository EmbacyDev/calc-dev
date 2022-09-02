<template>
  <div class="page">
    <div class="container">
      <h1>H1. Website configurator</h1>
      <div class="text-w">
        <p>Body text: Hi, it is Embacy’s website<br>
          cofigurator that will help you<br>
          to get an idea of how your new website<br>
          can look like. Grab a coffee<br>
          and let’s tweak some knobs :)
        </p>
      </div>
      <div class="btn-w">
        <router-link class="btn-link"
                     to="/calculator">Start building
        </router-link>
        <p>(est. time 5-7 minutes)</p>
      </div>
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

<style lang="sass">

</style>
