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
                  @click="nextStep(); updateTotal(); updateItemSteps();">Next
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
      padding: em(10) em(10) em(100) em(10)
      display: flex
      height: 100%
      flex-direction: column
      background: $lgr
      border-top-left-radius: em(20)
      border-bottom-left-radius: em(20)

  .button-w
    width: 100%
    display: flex
    justify-content: flex-end
</style>
