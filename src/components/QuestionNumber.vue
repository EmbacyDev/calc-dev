<template>
  <div class="input-w">
    <button type="button"
            :disabled="incrementDisabled"
            @click="increment"
            @keydown="increment"
            class="number-input-arrow">
      <icon-base :iconWidth="24"
                 :iconHeight="24">
        <path d="M3 19h18a1 1 0 0 0
            .82-1.57l-9-13c-.37-.54-1.27-.54-1.64 0l-9 13A1 1 0 0 0 3 19z"/>
      </icon-base>
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
            :disabled="decrementDisabled"
            @click="decrement"
            @keydown="decrement"
            class="number-input-arrow">
      <icon-base :iconWidth="24"
                 :iconHeight="24">
        <path d="M11.18 19.57a1 1 0 0 0 1.64
              0l9-13A1 1 0 0 0 21 5H3a1 1 0 0 0-.82 1.57l9 13z"/>
      </icon-base>
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
input[type="number"]
  text-align: center
  padding: 0
  outline: none
  border: none
  box-sizing: border-box
  +body($size: em(24))

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button
  appearance: none
  -webkit-appearance: none
  -moz-appearance: none
  margin: 0

input[type=number]
  -moz-appearance: textfield

.number-input-arrow
  cursor: pointer
  border: none
  background: transparent

  &:hover
    color: $ored

  &:active
    color: $yel
    transform: scale(0.9)

.number-input-w
  display: flex
  align-content: center
  justify-content: center
  align-items: center

  .number-input
    background: transparent
    border: none
    width: em(40)
    height: em(40)

@include small-d
  input[type="number"]
    text-align: center
    padding: px(2)
    outline: none
    border: none
    box-sizing: border-box
    +body($size: px(16))

  .number-input-arrow
    cursor: pointer
    border: none
    background: transparent

    &:hover
      color: $ored

    &:active
      color: $yel
      transform: scale(0.9)

  .number-input-w
    display: flex
    align-content: center
    justify-content: center
    align-items: center

    .number-input
      background: transparent
      border: none
      width: px(25)
      height: px(15)
</style>
