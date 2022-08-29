<template>
  <div class="input-radio-w">
    <fieldset class="form-radio-btn">
      <input id="no"
             type="checkbox"
             class="checkbox_btn"
             value="0"
             :checked="(removeCheckedList === 0)"
             v-model="isCheckAll"
             @click="checkAll()">
      <label for="no">No CMS</label>
    </fieldset>
    <fieldset v-for="item in itemsCheckBoxInput"
              :key="item.id"
              class="form-radio-btn">
      <input :id="item.id"
             type="checkbox"
             class="checkbox_btn"
             :value="item.value"
             :checked="item.checked"
             @input="$emit('update:checkedList', parseInt($event.target.value))">
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
    }
  },
  emits: ['update:checkedList'],
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
    },
    removeCheckedList() {
      return this.checkedList.length;
    }
  },
  methods: {
    checkAll() {
      const items = Object.values(this.itemsCheckBoxInput);
      items.forEach(el => {
        el.checked = false;
      });
    }
  }
};
</script>
