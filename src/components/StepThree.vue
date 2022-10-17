<template>
  <div class='main-step step-three'>
    <form>
      <div v-if="getVariant === 1"
           class="form-w">
        <div class="form-heading-w">
          <h2>Integrations</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Faucibus et molestie ac feugiat sed
            lectus vestibulum.
          </p>
        </div>
      </div>
      <div class="form-w">
        <div class="form-heading-w">
          <h4 class="sub-title">
            CMS technology
          </h4>
        </div>
        <question-radio :itemsRadioInput="variantQuest7"
                        v-model:checkedRadio="valueQuest7"
                        idGroup="quest7"/>
      </div>
      <div class="form-w">
        <div class="form-heading-w">
          <h4 class="sub-title">
            Integrations
          </h4>
        </div>
        <question-check-box :itemsCheckBoxInput="variantQuest8"
                            resetBoxName="No int"
                            v-model:checkedList="valueQuest8"/>
      </div>
      <div class="form-w">
        <div class="form-heading-w">
          <h4 class="sub-title">
            Website hosting
          </h4>
        </div>
        <question-radio :itemsRadioInput="variantQuest9"
                        v-model:checkedRadio="valueQuest9"
                        idGroup="quest9"/>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import itemsStepThree from '@/components/mixinsDate/itemsStepThree';

export default {
  name: 'StepThree',
  mixins: [itemsStepThree],
  props: {},
  data() {
    return {
      variantQuest7: this.quest7,
      variantQuest8: this.quest8,
      variantQuest9: this.quest9,
      valueQuest7: 0,
      valueQuest8: [],
      valueQuest9: 0
    };
  },
  computed: {
    ...mapGetters([
      'VARIANT'
    ]),
    getVariant() {
      return this.VARIANT[0];
    }
  },
  watch: {},
  created() {
    if (this.VARIANT[0] >= 3) {
      this.setVariantMixin();
    } else {
      this.variantQuest7 = this.quest7;
      this.variantQuest8 = this.quest8;
      this.variantQuest9 = this.quest9;
    }
  },
  methods: {
    ...mapActions([
      'ADD_TOTAL'
    ]),
    setVariantMixin() {
      this.variantQuest8 = this.quest8V2;
      this.variantQuest9 = this.quest9V2;
    },
    submitForm() {
      this.ADD_TOTAL([
        {
          q: 'CMS technology',
          v: this.valueQuest7
        },
        {
          q: 'Integrations',
          v: this.valueQuest8
        },
        {
          q: 'Website hosting',
          v: this.valueQuest9
        }
      ]);
    }
  }
};
</script>

<style lang="sass">
</style>
