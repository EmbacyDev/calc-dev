<template>
  <div class='main-step step-one'>
    <form>
      <div class="form-w">
        <div class="form-heading-w">
          <h2>How interesting is the project?</h2>
          <p>It’s ok to charge less if the job’s cool.
            Options 2 and 3 progressively reduce your fee by</p>
          <hr>
        </div>
        <question-radio :itemsRadioInput="itemsRadioInput"
                        v-model:checkedRadio="checkedRadioInput"
                        idGroup="radio1"/>
      </div>
      <div class="form-w flex-row">
        <div class="form-heading-w">
          <h2>What’s your hourly rate?</h2>
          <p>Enter your usual rate, or the one you expect from this project</p>
        </div>
        <question-number  :value="numberInputHourly"
                          symbolOne="$"
                          symbolSecond="/h"
                          v-model:valueNumber="numberInputHourly"
                          idInput="hourly-input"/>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'StepOne',
  props: {},
  data() {
    return {
      itemsRadioInput: [
        { id: 'radio-1', title: '1-12 months', value: 100, checked: true },
        { id: 'radio-2', title: '1-4 years', value: 200 },
        { id: 'radio-3', title: '4 years', value: 300 }
      ],
      checkedRadioInput: 100,
      numberInputHourly: 30
    };
  },
  computed: {},
  watch: {},
  methods: {
    ...mapActions([
      'ADD_TOTAL'
    ]),
    submitForm() {
      this.ADD_TOTAL(
        [
          this.checkedRadioInput,
          this.numberInputHourly
        ]
      );
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

  .form-radio-btn
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
