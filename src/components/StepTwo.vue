<template>
  <div class='main-step step-two'>
    <form>
      <div class="form-w first-line-form">
        <div v-if="getVariant <= 1"
             class="form-heading-w">
          <h2>Custom code</h2>
          <p class="main-sub-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Faucibus et molestie ac
            feugiat sed lectus vestibulum.
          </p>
        </div>
        <div v-else-if="getVariant === 3"
             class="form-heading-w">
          <h2>Landing page</h2>
          <p class="main-sub-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Faucibus et molestie ac
            feugiat sed lectus vestibulum.
          </p>
        </div>
        <div v-else
             class="form-heading-w">
          <h2>Corporate website</h2>
          <p class="main-sub-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Faucibus et molestie ac
            feugiat sed lectus vestibulum.
          </p>
        </div>
      </div>
      <div class="form-w">
        <div class="form-heading-w modals">
          <h4 class="sub-title">
            Layout option
          </h4>
          <info-modal :tipTexts="LayoutOption"/>
        </div>
        <question-radio :itemsRadioInput="quest1"
                        v-model:checkedRadio="valueQuest1"
                        idGroup="quest1"/>
      </div>
      <div v-if="getVariant <= 3"
           class="form-w">
        <div class="form-heading-w modals">
          <h4 class="sub-title">
            Number of unique page?
          </h4>
          <info-modal :tipTexts="NumberOfUnique"/>
        </div>
        <question-number :value="quest2.value"
                         :min=1
                         :max=250
                         :step=1
                         v-model:valueNumber="valueQuest2"
                         :idInput="quest2.id"/>
      </div>
      <div v-if="getVariant <= 3"
           class="form-w">
        <div class="form-heading-w modals">
          <h4 class="sub-title">
            Number of template page?
          </h4>
          <info-modal :tipTexts="NumberOfTemplate"/>
        </div>
        <question-number :value="quest3.value"
                         :min=1
                         :max=250
                         :step=1
                         v-model:valueNumber="valueQuest3"
                         :idInput="quest3.id"/>
      </div>
      <div v-if="getVariant <= 3"
           class="form-w">
        <div class="form-heading-w modals">
          <h4 class="sub-title">
            Motion design
          </h4>
          <info-modal :tipTexts="MotionDesign"/>
        </div>
        <question-radio :itemsRadioInput="quest5"
                        v-model:checkedRadio="valueQuest5"
                        idGroup="quest5"/>
      </div>
      <div class="form-w">
        <div class="form-heading-w modals">
          <h4 class="sub-title">
            What type of promo content will be on the website?
          </h4>
        </div>
        <question-check-box :itemsCheckBoxInput="quest6"
                            resetBoxName="No int"
                            v-model:checkedList="valueQuest6"/>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import itemsStepTwo from '@/components/mixinsDate/itemsStepTwo';
import InfoModal from '@/components/InfoModal';
import itemsTipText from '@/components/mixinsDate/itemsTipText';

export default {
  name: 'StepTwo',
  components: { InfoModal },
  mixins: [itemsStepTwo, itemsTipText],
  props: {},
  data() {
    return {
      isInfoModal: false,
      valueQuest1: 3000,
      valueQuest2: 1,
      valueQuest3: 1,
      // valueQuest4: 2000,
      valueQuest5: 0,
      valueQuest6: []
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
  methods: {
    ...mapActions([
      'ADD_TOTAL'
    ]),
    submitForm() {
      this.ADD_TOTAL(
        [
          {
            q: 'Layout option',
            v: this.valueQuest1
          },
          {
            q: 'Number of unique page?',
            v: this.valueQuest2
          },
          {
            q: 'Number of template page?',
            v: this.valueQuest3
          },
          // {
          //   q: 'Адаптив',
          //   v: this.valueQuest4
          // },
          {
            q: 'Motion design',
            v: this.valueQuest5
          },
          {
            q: 'What type of promo content will be on the website?',
            v: this.valueQuest6
          }
        ]
      );
    }
  }
};
</script>

<style lang="sass">
</style>
