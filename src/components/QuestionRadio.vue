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
  grid-template-columns: repeat(2, 1fr)
  gap: em(12) em(4)
  justify-content: stretch
  border-radius: em(6)
  .form-btn
    display: inline-block
    border-radius: em(6)
    .radio_btn
      display: none
      &:checked + label
        background: $or
    label
      min-width: auto
      display: flex
      justify-content: center
      align-items: center
      flex-wrap: nowrap
      cursor: pointer
      line-height: em(34)
      border: em(1) solid #999
      border-radius: em(6)
      user-select: none
    &:hover
      color: $lgr
      background: $yel

@include small-d
  .input-radio-w
    width: 100%
    display: flex
    flex-direction: column
    justify-content: center
    align-items: stretch
    .form-btn
      display: inline-block
      margin-right: px(0)
      border-radius: px(6)
      .radio_btn
        display: none
        &:checked + label
          background: $or
      label
        min-width: auto
        display: flex
        justify-content: center
        align-items: center
        flex-wrap: nowrap
        cursor: pointer
        padding: px(10) px(10) px(10) px(10)
        margin: px(10)
        line-height: px(34)
        border: px(1) solid #999
        border-radius: px(6)
        user-select: none
        +body($size: px(16))
      &:hover
        color: $lgr
        background: $yel
</style>
