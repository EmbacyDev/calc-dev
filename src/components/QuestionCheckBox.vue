<template>
  <div class="input-checkbox-w">
    <fieldset class="form-checkbox">
      <input id="no"
             type="checkbox"
             class="checkbox_btn"
             value="0"
             :disabled="isCheckAll"
             :checked="isCheckAll"
             v-model="isCheckAll"
             @click="checkAllReset()">
      <label for="no">{{ resetBoxName }}</label>
      <div v-for="item in itemsCheckBoxInput"
           :key="item.id">
        <input :id="item.id"
               type="checkbox"
               class="checkbox_btn"
               :value="item.value"
               :checked="item.checked"
               @input="checkBoxClick">
        <label :for="item.id">{{ item.title }}</label>
      </div>
    </fieldset>
  </div>
</template>

<script>

export default {
  name: 'QuestionCheckBox',
  components: {},
  props: {
    itemsCheckBoxInput: {
      type: Object
    },
    resetBoxName: {
      type: String,
      default: 'No'
    }
  },
  data() {
    return {
      isCheckAll: true
    };
  },
  computed: {
    checkedList() {
      return this.itemsCheckBoxInput
        .filter(el => el.checked && el.value !== 0)
        .map(el => el.value);
    }
  },
  methods: {
    checkBoxClick(event) {
      const items = Object.values(this.itemsCheckBoxInput);
      items.forEach(el => {
        if (el.value === Number(event.target.value)) {
          el.checked = !el.checked;
          this.isCheckAll = false;
        }
        if (this.itemsCheckBoxInput.filter(item => item.checked).length === 0) {
          this.isCheckAll = true;
        }
      });
      this.pushUPDate();
    },
    checkAllReset() {
      const items = Object.values(this.itemsCheckBoxInput);
      items.forEach(el => {
        el.checked = false;
      });
      this.isCheckAll = true;
      this.pushUPDate();
    },
    pushUPDate() {
      this.$emit('update:checkedList', this.checkedList);
    }
  }
};
</script>
<style scoped lang="sass">
.input-checkbox-w
  .form-checkbox
    width: 100%
    display: flex
    grid-auto-columns: auto
    grid-auto-rows: auto
    grid-template-columns: repeat(5, auto)
    gap: 1em 1em
    justify-content: flex-start
    flex-direction: row
    flex-wrap: wrap
    .checkbox_btn
      display: none
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

  input[type="checkbox"]:checked + label
    border: em(1) solid $or
    background: $or-bg

@include small-d
  .input-checkbox-w
    width: 100%
    .form-checkbox
      width: 100%
      display: flex
      grid-auto-columns: 1fr
      grid-auto-rows: 1fr
      grid-template-columns: repeat(2, auto)
      gap: px(8) px(0)
      justify-content: flex-start
      flex-direction: column
      .checkbox_btn
        display: none
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
