<template>
  <div class="input-radio-w">
    <fieldset v-for="item in itemsRadioInput"
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
    </fieldset>
  </div>
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
.form-btn
  display: inline-block
  margin-right: em(10)
  border-radius: em(6)
  .radio_btn
    display: none
    &:checked + label
      background: $or
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
    color: $lgr
    background: $yel

@include small-d
  .form-btn
    display: inline-block
    margin-right: px(10)
    border-radius: px(6)
    .radio_btn
      display: none
      &:checked + label
        background: $or
    label
      min-width: px(150)
      display: flex
      justify-content: center
      align-items: center
      flex-wrap: nowrap
      cursor: pointer
      padding: 0 px(15)
      line-height: px(34)
      border: px(1) solid #999
      border-radius: px(6)
      user-select: none
    &:hover
      color: $lgr
      background: $yel
</style>
