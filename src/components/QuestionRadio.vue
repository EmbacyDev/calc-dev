<template>
  <fieldset class="input-radio-w">
    <div v-for="item in itemsRadioInput"
         :key="item.id"
         :id=idGroup
         class="form-btn">
      <input :id="item.id"
             type="radio"
             class="radio_btn"
             :name=idGroup
             :value="item.value"
             :checked="item.checked"
             @input="$emit('update:checkedRadio', parseInt($event.target.value))">
      <label :for="item.id">{{ item.title }}</label>
    </div>
  </fieldset>
</template>

<script>
export default {
  name: 'QuestionRadio',
  components: {},
  props: {
    itemsRadioInput: {
      type: Object
    },
    idGroup: {
      type: String,
      default: 'radio'
    },
    checkedRadio: Number
  },
  emits: ['update:checkedRadio']
};
</script>
<style lang="sass">
.input-radio-w
  width: 100%
  display: grid
  grid-auto-columns: 1fr
  grid-auto-rows: 1fr
  grid-template-columns: repeat(5, auto)
  gap: em(16) em(16)
  justify-content: flex-start
  .form-btn
    display: inline-block
    border-radius: em(4)
    .radio_btn
      display: none
      &:checked + label
        border: em(1) solid $or
        background: $or-bg
      &:hover + label
        background: $or-bg
    label
      min-width: em(100)
      padding: em(24) em(32) em(24) em(32)
      display: flex
      justify-content: center
      align-items: center
      flex-wrap: nowrap
      cursor: pointer
      line-height: em(34)
      border: em(1) solid $lgr
      border-radius: em(4)
      user-select: none
      +bodyMedium($size: em(16))
      background: $milk
@include small-d
  .input-radio-w
    width: 100%
    display: flex
    grid-auto-columns: 1fr
    grid-auto-rows: 1fr
    grid-template-columns: repeat(2, auto)
    gap: px(8) px(0)
    justify-content: flex-start
    flex-direction: column
    .form-btn
      display: inline-block
      border-radius: px(4)
      .radio_btn
        display: none
        &:checked + label
          border: px(1) solid $or
          background: $or-bg
        &:hover + label
          background: $or-bg
      label
        min-width: px(100)
        padding: px(12) px(0) px(12) px(0)
        display: flex
        justify-content: center
        align-items: center
        flex-wrap: nowrap
        cursor: pointer
        line-height: px(34)
        border: px(1) solid $lgr
        border-radius: px(4)
        user-select: none
        +bodyMedium($size: px(16))
        background: $milk
</style>
