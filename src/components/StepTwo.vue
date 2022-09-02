<template>
  <div class='main-step step-two'>
    <form>
      <div class="form-w">
        <div class="form-heading-w">
          <h2>Лейаут (табы)</h2>
          <p>title text</p>
          <hr>
        </div>
        <question-radio :itemsRadioInput="quest1"
                        v-model:checkedRadio="valueQuest1"
                        idGroup="quest1"/>
      </div>
      <div v-if="getVariant <= 3"
           class="form-w flex-row">
        <div class="form-heading-w">
          <h2>Кол-во шаблонных страниц</h2>
          <p>title text</p>
        </div>
        <question-number :value="quest2.value"
                         :min=1
                         :max=250
                         :step=1
                         v-model:valueNumber="valueQuest2"
                         :idInput="quest2.id"/>
      </div>
      <div v-if="getVariant <= 3"
           class="form-w flex-row">
        <div class="form-heading-w">
          <h2>Кол-во уникальных страниц</h2>
          <p>title text</p>
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
        <div class="form-heading-w">
          <h2>Адаптив</h2>
          <p>title text</p>
          <hr>
        </div>
        <question-radio :itemsRadioInput="quest4"
                        v-model:checkedRadio="valueQuest4"
                        idGroup="quest4"/>
      </div>
      <div class="form-w">
        <div class="form-heading-w">
          <h2>Моушн дизайн</h2>
          <p>title text</p>
          <hr>
        </div>
        <question-radio :itemsRadioInput="quest5"
                        v-model:checkedRadio="valueQuest5"
                        idGroup="quest5"/>
      </div>
      <div class="form-w">
        <div class="form-heading-w">
          <h2>Страницы с промо контентом</h2>
          <p>title text</p>
          <hr>
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

export default {
  name: 'StepTwo',
  mixins: [itemsStepTwo],
  props: {},
  data() {
    return {
      valueQuest1: 3000,
      valueQuest2: 1,
      valueQuest3: 1,
      valueQuest4: 2000,
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
            q: 'Лейаут (табы)',
            v: this.valueQuest1
          },
          {
            q: 'Кол-во шаблонных страниц',
            v: this.valueQuest2
          },
          {
            q: 'Кол-во уникальных страниц',
            v: this.valueQuest3
          },
          {
            q: 'Адаптив',
            v: this.valueQuest4
          },
          {
            q: 'Моушн дизайн',
            v: this.valueQuest5
          },
          {
            q: 'Страницы с промо контентом',
            v: this.valueQuest6
          }
        ]
      );
    }
  }
};
</script>

<style lang="sass">
.step-two
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

</style>
