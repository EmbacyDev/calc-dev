<template>
  <div class='main-step step-one'>
    <form>
      <div class="form-w">
        <div class="form-heading-w">
          <h2>H1. Pick you technology?</h2>
          <p>title text</p>
          <hr>
        </div>
        <question-radio :itemsRadioInput="quest0"
                        v-model:checkedRadio="valueQuest0"
                        idGroup="quest4"/>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import itemsStepOne from '@/components/mixinsDate/itemsStepOne';

export default {
  name: 'StepOne',
  mixins: [itemsStepOne],
  props: {},
  data() {
    return {
      valueQuest0: 1
    };
  },
  methods: {
    ...mapActions([
      'ADD_VARIANT'
    ]),
    submitForm() {
      this.ADD_VARIANT([this.valueQuest0]);
    }
  }
};
</script>

<style lang="sass">
.step-one
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
