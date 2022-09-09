<template>
  <section>
    <div class="page">
      <div class="container">
        <div class="main-content">
          <div class="check-block">
            <div class="step"
                 v-for="item in itemsStep"
                 :key="item.title">
              <h5>{{ item.title }}</h5>
              <icon-base v-if="item.icon"
                         iconColor="#ff531a"
                         :iconWidth="24"
                         :iconHeight="24">
                <path d="M10.381 21.629
               1.491 15.404c-.534-.374-.664-1.11-.29-1.644l1.354-1.934c.374-.534
               1.11-.664 1.644-.29L10.189 15.729l8.982-12.827c.374-.534 1.11-.664
               1.644-.29l1.934 1.355c.534.374 .664 1.11.29 1.644L12.025
               21.339c-.374.534-1.11.664-1.644.29z"/>
              </icon-base>
            </div>
          </div>
        </div>
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
          title: 'Step 1',
          icon: false
        },
        {
          title: 'Step 2',
          icon: false
        },
        {
          title: 'Step 3',
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
      padding: em(5) em(5) em(5) em(5)
      display: flex
      height: auto
      width: 100%
      flex-direction: row
      justify-content: space-evenly
      align-items: center
      align-content: center
      flex-wrap: nowrap
      background: $milk
      border: px(1) solid #999
      border-radius: px(6)
      .step
        min-width: em(110)
        display: flex
        padding: em(32) em(8) em(32) em(32)
        align-items: center
        justify-content: flex-start
        align-content: center
        flex-wrap: nowrap
        +h4($size: em(20))
        h5
          text-transform: uppercase
          padding-right: em(12)
  .button-w
    width: auto
    display: flex
    justify-content: flex-end
    .btn
      display: flex
      align-content: center
      align-items: center
      justify-content: center
      flex-wrap: nowrap
      margin-left: em(40)
      padding: em(10) em(40) em(10) em(40)
      +body($size: em(16))
      outline: none
      background-color: $white
      border-radius: em(8)
      cursor: pointer
      +baseAnimation
      span
        margin: 0 em(5) 0 em(5)
    .btn-next
      border: em(1) solid $pur
      &:hover
        color: $pur
        transform: rotateY(15deg)
        box-shadow: em(-10) 0 em(8) $pur
      &:active
        transform: scale(0.9)
    .btn-back
      border: em(1) solid $or
      flex-direction: row-reverse
      &:hover
        color: $or
        transform: rotateY(-15deg)
        box-shadow: em(10) 0 em(8) $or
      &:active
        transform: scale(0.9)

@include small-d
  .container
    .main-content
      width: 100%
      display: flex
      align-items: center
      justify-content: center
      align-content: center
      .check-block
        padding: px(5) px(5) px(5) px(5)
        display: flex
        height: auto
        width: 100%
        flex-direction: row
        justify-content: space-evenly
        align-items: center
        align-content: center
        flex-wrap: nowrap
        background: $milk
        border-radius: px(5)
        .step
          min-width: px(50)
          display: flex
          padding: px(8) px(4) px(8) px(8)
          align-items: center
          justify-content: flex-start
          align-content: center
          flex-wrap: nowrap
          +h4($size: px(12))
          h5
            text-transform: uppercase
            padding-right: px(12)
    .button-w
      width: 100%
      display: flex
      justify-content: space-between
      +body($size: px(16))
      .btn
        display: flex
        align-content: center
        align-items: center
        justify-content: center
        flex-wrap: nowrap
        margin-left: 0
        padding: px(10) px(10) px(10) px(10)
        +body($size: px(16))
        outline: none
        background-color: $white
        border-radius: px(8)
        cursor: pointer
        +baseAnimation
        span
          margin: 0 px(5) 0 px(5)
      .btn-next
        border: px(1) solid $pur
        &:hover
          color: $pur
          transform: rotateY(15deg)
          box-shadow: px(-10) 0 px(8) $pur
        &:active
          transform: scale(0.9)
      .btn-back
        border: px(1) solid $or
        flex-direction: row-reverse
        &:hover
          color: $or
          transform: rotateY(-15deg)
          box-shadow: px(10) 0 px(8) $or
        &:active
          transform: scale(0.9)

</style>
