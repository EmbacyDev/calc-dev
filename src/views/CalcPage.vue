<template>
  <div class="calc-page">
    <div class="container">
      <div class="main-content">
        <div class="check-block">
          <div class="step"
               v-for="item in itemsStep"
               :key="item.title">
            <h5>{{ item.title }}</h5>
            <icon-base v-if="item.icon"
                       :iconWidth="25"
                       :iconHeight="25">
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
          <component ref="stepComponent"
                     :is="renderStepComponent"/>
        </keep-alive>
      </div>
      <div class="button-w">
        <button :disabled="step <= 0"
                type="button"
                class="btn btn-back"
                @click="prevStep(); removeTotal(); removeItemSteps();">Back
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
                @click="nextStep(); updateTotal(); updateItemSteps();">Next
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

import { mapActions, mapGetters } from 'vuex';

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
      itemsStep: [
        { title: 'Step 1', icon: false },
        { title: 'Step 2', icon: false },
        { title: 'Step 3', icon: false }
      ],
      step: 0
    };
  },
  computed: {
    ...mapGetters([
      'STEPS',
      'VARIANT'
    ]),
    renderStepComponent() {
      return this.STEPS[this.step];
    },
    getStepLength() {
      let stepLength;
      if (this.STEPS.length >= 4) {
        stepLength = 2;
      } else {
        stepLength = 1;
      }
      return stepLength;
    }
  },
  watch: {},
  methods: {
    ...mapActions([
      'REMOVE_TOTAL'
    ]),
    updateItemSteps() {
      if (this.VARIANT[0] === 2) {
        this.itemsStep.push({
          title: 'Step 4',
          icon: false
        });
      }
    },
    removeItemSteps() {
      if (this.step < 1) {
        this.itemsStep.splice(2, 1);
        console.log('РАБОТАЕТ');
      }
    },
    nextStep() {
      const items = Object.values(this.itemsStep);
      items[this.step].icon = true;
      if (this.step <= this.getStepLength) {
        this.step++;
      } else {
        this.$router.push({ path: '/total' });
        // console.log({ router: this.$router });
      }
    },
    prevStep() {
      const items = Object.values(this.itemsStep);
      items[this.step - 1].icon = false;
      if (this.step >= 1) {
        this.step--;
      }
    },
    updateTotal() {
      return this.$refs.stepComponent.submitForm();
    },
    removeTotal() {
      this.REMOVE_TOTAL(this.step);
    }
  }
};
</script>

<style scoped lang="sass">
.container
  .main-content
    width: 100%
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
    width: 100%
    display: flex
</style>
