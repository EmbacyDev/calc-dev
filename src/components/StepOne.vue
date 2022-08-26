<template>
  <div class='main-step step-one'>
    <form>
      <div class="form-w">
        <div class="form-heading-w">
          <h2>How long have you been doing Webflow?</h2>
          <p>Your skillset factors into flexibility, deadline and other aspects of the job</p>
          <hr>
        </div>
        <div class="input-radio-w">
          <div v-for="item in itemsRadioInput"
               :key="item.id"
               class="form-radio-btn">
            <input :id="item.id"
                   type="radio"
                   class="radio_btn"
                   name="radio"
                   :value="item.value"
                   :checked="item.checked"
                   v-model="checkedRadioInput">
            <label :for="item.id">{{ item.title }}</label>
          </div>
        </div>
      </div>
      <div class="form-w flex-row">
        <div class="form-heading-w">
          <h2>What’s your hourly rate?</h2>
          <p>Enter your usual rate, or the one you expect from this project</p>
        </div>
        <div class="input-w">
          <div @click="numberInputHourly += 5"
               @keydown="numberInputHourly += 5"
               class="number-input-arrow">
            <icon-base :iconWidth="24"
                       :iconHeight="24">
              <path d="M3 19h18a1 1 0 0 0
            .82-1.57l-9-13c-.37-.54-1.27-.54-1.64 0l-9 13A1 1 0 0 0 3 19z"/>
            </icon-base>
          </div>
          <div class="number-input-w">
            <label for="hourly-rate"
                   class="input-text">$</label>
            <input type="number"
                   class="number-input"
                   maxlength="256"
                   max="256"
                   min="5"
                   name="field-3"
                   step="5"
                   v-model.trim.number="numberInputHourly"
                   placeholder=""
                   id="hourly-rate">
            <div class="number-input-text">/h</div>
          </div>
          <div @click="numberInputHourly -= 5"
               @keydown="numberInputHourly -= 5"
               class="number-input-arrow">
            <icon-base :iconWidth="24"
                       :iconHeight="24">
              <path d="M11.18 19.57a1 1 0 0 0 1.64
              0l9-13A1 1 0 0 0 21 5H3a1 1 0 0 0-.82 1.57l9 13z"/>
            </icon-base>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'StepOne',
  components: {},
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
      this.ADD_TOTAL([
        this.checkedRadioInput,
        this.numberInputHourly
      ]);
    }
  }
};
</script>

<style scoped lang="sass">
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

    .number-input-w
      display: flex
      align-content: center
      justify-content: center
      align-items: center

      .number-input
        background: beige
        border: none
        width: em(100)
        height: em(40)
</style>
