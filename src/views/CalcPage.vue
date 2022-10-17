<template>
  <section>
    <div class="page">
      <div class="container">
        <div class="main-content">
          <div class="check-block">
            <div class="step"
                 :class="{ activeLine: item.icon }"
                 v-for="item in itemsStep"
                 :key="item.title">
              <h5>{{ item.title }}</h5>
              <div class="line-step"/>
            </div>
          </div>
        </div>
        <div class="layoutSteps">
          <keep-alive>
            <component ref="stepComponent"
                       :is="renderStepComponent"/>
          </keep-alive>
          <div class="button-w">
            <button :disabled="step <= 0"
                    type="button"
                    class="btn btn-back"
                    @click="prevStep(); removeTotal(); removeItemSteps();">
              <span>Back</span>
              <icon-base :iconWidth="24"
                         :iconHeight="24">
                <path stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21.664 12l-19.328 0m0 0L12.072 21.736M2.336 12l9.736-9.736"/>
              </icon-base>
            </button>
            <button type="button"
                    class="btn btn-next"
                    @click="nextStep(); updateTotal(); updateItemSteps();">
              <span>Next</span>
              <icon-base :iconWidth="24"
                         :iconHeight="24">
                <path stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.336 12l19.328 0m0 0L11.928 21.736M21.664 12l-9.736-9.736"/>
              </icon-base>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
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
        {
          title: '1. Technology',
          icon: false
        },
        {
          title: '2. Layout ',
          icon: false
        },
        {
          title: '3. Integrations',
          icon: false
        }
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
      if (this.step < 1 && this.itemsStep.length > 2) {
        this.itemsStep.splice(3, 1);
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
      display: flex
      height: auto
      width: 100%
      flex-direction: row
      justify-content: center
      align-items: center
      align-content: center
      flex-wrap: nowrap
      border-radius: em(6)
      .step
        min-width: em(110)
        display: flex
        padding: em(0) em(10) em(0) em(10)
        align-items: flex-start
        flex-direction: column
        align-content: flex-start
        flex-wrap: nowrap
        h5
          +body($size: em(16))
          padding-right: em(12)
        .line-step
          height: em(4)
          width: em(210)
          margin-top: em(8)
          background-color: $lgr
      .step.activeLine
        h5
          +body($color: $pur, $size: em(16))
        .line-step
          background-color: $pur
  .button-w
    width: auto
    display: flex
    justify-content: space-between
    margin-top: em(60)
    .btn
      border: none
      padding: 0
      background-color: transparent
      +linkHover
      display: flex
      flex-direction: row
      flex-wrap: nowrap
      align-content: center
      justify-content: center
      align-items: center
      cursor: pointer
      +LinkLarge($color: $gr, $size: em(24))
      span
        margin: 0 em(5) 0 em(5)
    .btn-back
      flex-direction: row-reverse
    .btn:disabled
      opacity: 0

@include small-d
  .container
    .main-content
      width: 100%
      display: flex
      .check-block
        display: flex
        height: auto
        width: 100%
        flex-direction: row
        justify-content: space-between
        align-items: center
        align-content: center
        flex-wrap: nowrap
        border-radius: px(6)
        .step
          min-width: auto
          display: flex
          padding: px(0) px(8) px(0) px(8)
          align-items: flex-start
          flex-direction: column
          align-content: flex-start
          flex-wrap: nowrap
          h5
            +body($size: px(13))
            padding-right: px(8)
          .line-step
            height: px(2)
            width: 100%
            min-width: px(100)
            margin-top: px(4)
            background-color: $lgr
        .step.activeLine
          h5
            +body($color: $pur, $size: px(13))
          .line-step
            background-color: $pur
    .button-w
      width: auto
      display: flex
      justify-content: space-between
      margin-top: px(60)
      .btn
        border: none
        +linkHover
        display: flex
        flex-direction: row
        flex-wrap: nowrap
        align-content: center
        justify-content: center
        align-items: center
        cursor: pointer
        padding: 0
        background-color: transparent
        +LinkLarge($color: $gr, $size: px(20))
        span
          margin: 0 px(5) 0 px(5)
      .btn-back
        flex-direction: row-reverse
      .btn:disabled
        opacity: 0

</style>
