<template>
  <div class="calc-page">
    <div class="container">
      <div class="main-content">
        <div class="check-block">
          <div class="step">
            <h5>step 1</h5>
            <icon-base :iconWidth="25"
                       :iconHeight="25"
                       v-if="step >= 1">
              <path fill="#59b6a4"
                    d="M14.43 8.22a7.09 7.09 0 0 1-7.09 7.09A7.09 7.09 0 0 1 .26 8.22a7.09
                  7.09 0 0 1 7.08-7.08 7.09 7.09 0 0 1 7.09 7.08Z"
                    opacity=".99"/>
              <path fill="none"
                    stroke="#fff"
                    stroke-width="1.56"
                    d="M3.19 8.69 6 11.5l5.15-7.02"/>
            </icon-base>
          </div>
          <div class="step">
            <h5>step 2</h5>
            <icon-base :iconWidth="25"
                       :iconHeight="25"
                       v-if="step >= 2">
              <path fill="#59b6a4"
                    d="M14.43 8.22a7.09 7.09 0 0 1-7.09 7.09A7.09 7.09 0 0 1 .26 8.22a7.09
                  7.09 0 0 1 7.08-7.08 7.09 7.09 0 0 1 7.09 7.08Z"
                    opacity=".99"/>
              <path fill="none"
                    stroke="#fff"
                    stroke-width="1.56"
                    d="M3.19 8.69 6 11.5l5.15-7.02"/>
            </icon-base>
          </div>
          <div class="step">
            <h5>step 3</h5>
            <icon-base :iconWidth="25"
                       :iconHeight="25"
                       v-if="step >= 3">
              <path fill="#59b6a4"
                    d="M14.43 8.22a7.09 7.09 0 0 1-7.09 7.09A7.09 7.09 0 0 1 .26 8.22a7.09
                  7.09 0 0 1 7.08-7.08 7.09 7.09 0 0 1 7.09 7.08Z"
                    opacity=".99"/>
              <path fill="none"
                    stroke="#fff"
                    stroke-width="1.56"
                    d="M3.19 8.69 6 11.5l5.15-7.02"/>
            </icon-base>
          </div>
        </div>
        <keep-alive>
          <component :is="renderStepComponent"/>
        </keep-alive>
      </div>
      <div class="button-w">
        <button :disabled="step <= 0"
                type="button"
                class="btn btn-back"
                @click="prevStep">Back
          <icon-base :iconWidth="25"
                     :iconHeight="25">
            <path fill="none"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 10H1m0 0 8.06-8.06M1 10l8.06 8.06"/>
          </icon-base>
        </button>
        <button type="button"
                class="btn btn-next"
                @click="nextStep">Next
          <icon-base :iconWidth="25"
                     :iconHeight="25">
            <path fill="none"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 10h16m0 0L8.94 1.94M17 10l-8.06 8.06"/>
          </icon-base>
        </button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CalcPage',
  components: {},
  props: {
    disableBtn: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      steps: ['StepOne', 'StepTwo', 'StepThree'],
      step: 0
    };
  },
  computed: {
    renderStepComponent() {
      return this.steps[this.step];
    }
  },
  watch: {},
  methods: {
    nextStep() {
      if (this.step <= 1) {
        this.step++;
      }
    },
    prevStep() {
      if (this.step >= 1) {
        this.step--;
      }
    }
    // totalStep() {
    //   if (this.step >= 1) {
    //     this.step--;
    //   }
    // }
  }
};
</script>

<style scoped lang="sass">
.container
  .main-content
    display: flex

    .check-block
      padding: em(70) em(30) em(70) em(30)
      display: flex
      height: 100%
      flex-direction: column
      background: wheat
      border-top-left-radius: em(20)
      border-bottom-left-radius: em(20)

  .button-w
    display: flex
</style>
