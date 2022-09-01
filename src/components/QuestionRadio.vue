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
