<template>
  <div class="input-checkbox-w">
    <fieldset class="form-checkbox">
      <div>
        <input id="no"
               type="checkbox"
               class="checkbox_btn"
               value="0"
               :disabled="isCheckAll"
               :checked="isCheckAll"
               v-model="isCheckAll"
               @click="checkAllReset()">
        <label for="no">{{ resetBoxName }}</label>
      </div>
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
<style lang="sass">
.form-checkbox
  display: grid
  grid-auto-columns: 1fr
  grid-auto-rows: 1fr
  grid-template-columns: repeat(3, min-content)
  grid-template-rows: repeat(2, min-content)
  gap: em(16) em(16)
  justify-content: stretch
  border-radius: em(6)
  label
    display: inline-block

input[type="checkbox"]
  display: none

input[type="checkbox"] + label
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

input[type="checkbox"]:checked + label
  background-image: none
  outline: 0
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.05)
  background-color: $pur

</style>
