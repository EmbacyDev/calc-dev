<template>
  <div class='main-step step-three'>
    <form>
      <div v-if="getVariant === 1"
           class="form-w">
        <div class="form-heading-w">
          <h2>Пожелание к CMS технологии</h2>
          <p>title text</p>
          <hr>
        </div>
        <question-radio :itemsRadioInput="variantQuest7"
                        v-model:checkedRadio="valueQuest7"
                        idGroup="quest7"/>
      </div>
      <div class="form-w">
        <div class="form-heading-w">
          <h2>Интеграции</h2>
          <p>title text</p>
          <hr>
        </div>
        <question-check-box :itemsCheckBoxInput="variantQuest8"
                            resetBoxName="No int"
                            v-model:checkedList="valueQuest8"/>

      </div>
      <div class="form-w">
        <div class="form-heading-w">
          <h2>Хостинг сайта</h2>
          <p>title text</p>
          <hr>
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
          q: 'Пожелание к CMS технологии',
          v: this.valueQuest7
        },
        {
          q: 'Интеграции',
          v: this.valueQuest8
        },
        {
          q: 'Хостинг сайта',
          v: this.valueQuest9
        }
      ]);
    }
  }
};
</script>

<style lang="sass">
.step-three
  .form-heading-w
    width: 100%
    h2
      margin-bottom: em(8)

  .input-w
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    align-content: center
    flex-wrap: nowrap
    border: em(1) solid #999
    border-radius: em(6)
    width: auto

.step-one .form-w:last-child
  margin-top: em(32)
</style>
