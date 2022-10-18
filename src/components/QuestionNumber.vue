<template>
  <div class="input-w">
    <button type="button"
            :disabled="decrementDisabled"
            @click="decrement"
            @keydown="decrement"
            class="number-input-arrow">
      <span>-</span>
    </button>
    <div class="number-input-w">
      <label :for=idInput
             class="input-text">{{ symbolOne }}</label>
      <input :id=idInput
             type="number"
             class="number-input"
             :disabled="inputDisabled"
             :max=max
             :min=min
             :name=idInput
             :step=step
             v-model.number="currentValue"
             @blur="currentValue = value"
             @keydown.esc="currentValue = value"
             @keydown.enter="currentValue = value"
             @keydown.up.prevent="increment"
             @keydown.down.prevent="decrement">
      <div class="number-input-text">{{ symbolSecond }}</div>
    </div>
    <button type="button"
            :disabled="incrementDisabled"
            @click="increment"
            @keydown="increment"
            class="number-input-arrow">
      <span>+</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'QuestionNumber',
  components: {},
  props: {
    idInput: {
      type: String,
      default: 'number-input'
    },
    step: {
      type: Number,
      default: 5
    },
    max: {
      type: Number,
      default: 255
    },
    min: {
      type: Number,
      default: 5
    },
    symbolOne: {
      type: String,
      default: ''
    },
    symbolSecond: {
      type: String,
      default: ''
    },
    value: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      currentValue: this.value,
      decrementDisabled: false,
      incrementDisabled: false,
      inputDisabled: false
    };
  },
  computed: {},
  watch: {
    value(val) {
      this.currentValue = val;
    }
  },
  mounted() {
    if (this.value === this.min) {
      this.decrementDisabled = true;
    }
  },
  methods: {
    increment() {
      if (this.disabled || this.incrementDisabled) {
        return;
      }
      const newVal = this.currentValue + this.step;
      this.decrementDisabled = false;
      this.updateValue(newVal);
    },
    decrement() {
      if (this.disabled || this.decrementDisabled) {
        return;
      }
      const newVal = this.currentValue + (-1 * this.step);
      this.incrementDisabled = false;
      this.updateValue(newVal);
    },
    updateValue(newVal) {
      const oldVal = this.currentValue;
      if (oldVal === newVal || typeof this.value !== 'number') {
        return;
      }
      if (newVal <= this.min) {
        newVal = this.min;
        this.decrementDisabled = true;
      }
      if (newVal >= this.max) {
        newVal = this.max;
        this.incrementDisabled = true;
      }
      this.currentValue = newVal;
      this.$emit('update:valueNumber', this.currentValue);
    }
  }
};
</script>
<style lang="sass">
.input-w
  display: flex
  flex-direction: row
  align-items: center
  justify-content: center
  align-content: center
  flex-wrap: nowrap
  width: auto
  .number-input-arrow
    cursor: pointer
    border: none
    background: transparent
    padding: 0
    +bodyMedium($size: em(16))
    span
      display: flex
      align-content: center
      justify-content: center
      align-items: center
      width: em(40)
      height: em(40)
      border-radius: 100%
      background-color: $white
      &:hover
        background-color: $milk
  .number-input-w
    padding: 0 em(8) 0 em(8)
    .number-input
      text-align: center
      outline: none
      box-sizing: border-box
      +bodyMedium($size: em(16))
      -moz-appearance: textfield
      border: em(1) solid $lgr
      border-radius: em(54)
      background: transparent
      width: em(58)
      height: em(40)

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button
  appearance: none
  -webkit-appearance: none
  -moz-appearance: none
  margin: 0

@include small-d
  .input-w
    display: flex
    flex-direction: row
    align-items: center
    justify-content: flex-start
    align-content: center
    flex-wrap: nowrap
    width: auto
    .number-input-arrow
      cursor: pointer
      border: none
      background: transparent
      padding: 0
      +bodyMedium($size: px(16))
      span
        display: flex
        align-content: center
        justify-content: center
        align-items: center
        width: px(34)
        height: px(34)
        border-radius: 100%
        background-color: $white
        &:hover
          background-color: $milk
    .number-input-w
      padding: 0 px(8) 0 px(8)
      .number-input
        text-align: center
        outline: none
        box-sizing: border-box
        +bodyMedium($size: px(16))
        -moz-appearance: textfield
        border: px(1) solid $lgr
        border-radius: px(54)
        background: transparent
        width: px(57)
        height: px(34)
</style>
