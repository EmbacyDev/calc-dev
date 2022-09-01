<template>
  <div class='main-step step-before'>
    <form>
      <div class="form-w">
        <div class="form-heading-w">
          <h2>Выбор варианта сайта</h2>
          <p>title text</p>
          <hr>
        </div>
        <question-radio :itemsRadioInput="questB"
                        v-model:checkedRadio="valueQuestB"
                        idGroup="quest0"/>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import itemsStepBefore from '@/components/mixinsDate/itemsStepBefore';

export default {
  name: 'StepBeforeTwo',
  mixins: [itemsStepBefore],
  props: {},
  data() {
    return {
      valueQuestB: 3
    };
  },
  methods: {
    ...mapActions([
      'ADD_VARIANT'
    ]),
    submitForm() {
      this.ADD_VARIANT([this.valueQuestB]);
    }
  }
};
</script>

<style lang="sass">
.step-before
  .form-heading-w
    width: 100%

    h2
      margin-bottom: em(8)

  .form-btn
    display: inline-block
    margin-right: em(10)
    border-radius: em(6)

    .radio_btn
      display: none

      &:checked + label
        background: #ffe0a6

    label
      min-width: em(150)
      display: flex
      justify-content: center
      align-items: center
      flex-wrap: nowrap
      cursor: pointer
      padding: 0 em(15)
      line-height: em(34)
      border: em(1) solid #999
      border-radius: em(6)
      user-select: none

    &:hover
      color: #666
      background: rgba(255, 224, 166, 0.71)

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
