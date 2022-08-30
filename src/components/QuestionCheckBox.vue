<template>
  <div class="input-radio-w">
    <fieldset class="form-radio-btn">
      <input id="no"
             type="checkbox"
             class="checkbox_btn"
             value="0"
             :disabled="isCheckAll"
             :checked="isCheckAll"
             v-model="isCheckAll"
             @click="checkAllReset()">
      <label for="no">{{ resetBoxName }}</label>
    </fieldset>
    <fieldset v-for="item in itemsCheckBoxInput"
              :key="item.id"
              class="form-radio-btn">
      <input :id="item.id"
             type="checkbox"
             class="checkbox_btn"
             :value="item.value"
             :checked="item.checked"
             @input="checkBoxClick">
      <label :for="item.id">{{ item.title }}</label>
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
