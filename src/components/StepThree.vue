<template>
  <div class='main-step step-three'>
    <form>
      <div class="form-w">
        <div class="form-heading-w">
          <h2>How interesting is the project?</h2>
          <p>It’s ok to charge less if the job’s cool.
            Options 2 and 3 progressively reduce your fee by</p>
          <hr>
        </div>
        <div class="input-radio-w">
          <fieldset id="group1"
                    v-for="item in itemsInterestingRadioInput"
                    :key="item.id"
                    class="form-radio-btn">
            <input :id="item.id"
                   type="radio"
                   class="radio_btn"
                   name="group1"
                   :value="item.value"
                   :checked="item.checked"
                   v-model="checkedRadioInputInteresting">
            <label :for="item.id">{{ item.title }}</label>
          </fieldset>
        </div>
      </div>
      <div class="form-w">
        <div class="form-heading-w">
          <h2>How important is this client to you?</h2>
          <p>Don’t lose a dream client to a short-term paycheck.
            Options 2 and 3 reduce your fee by</p>
          <hr>
        </div>
        <div class="input-radio-w">
          <fieldset id="group2"
                    v-for="item in itemsImportantRadioInput"
                    :key="item.id"
                    class="form-radio-btn">
            <input :id="item.id"
                   type="radio"
                   class="radio_btn"
                   name="group2"
                   :value="item.value"
                   :checked="item.checked"
                   v-model="checkedRadioInputImportant">
            <label :for="item.id">{{ item.title }}</label>
          </fieldset>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'StepThree',
  components: {},
  props: {},
  data() {
    return {
      itemsInterestingRadioInput: [
        { id: 'radio-1', title: 'Booooring', value: 151 },
        { id: 'radio-2', title: 'Biz as usual', value: 251, checked: true },
        { id: 'radio-3', title: 'Good portfolio', value: 351 }
      ],
      itemsImportantRadioInput: [
        { id: 'radio-4', title: 'Just money', value: 157 },
        { id: 'radio-5', title: 'Good portfolio', value: 257, checked: true },
        { id: 'radio-6', title: 'Life changer', value: 357 }
      ],
      checkedRadioInputInteresting: 251,
      checkedRadioInputImportant: 257
    };
  },
  computed: {},
  watch: {},
  methods: {
    ...mapActions([
      'ADD_TOTAL'
    ]),
    submitForm() {
      this.ADD_TOTAL([this.checkedRadioInputInteresting, this.checkedRadioInputImportant]);
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
