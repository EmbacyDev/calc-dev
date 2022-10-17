<template>
  <div class='main-step step-before'>
    <form>
      <div class="form-w first-line-form">
        <div class="form-heading-w">
          <h2>Type</h2>
          <p>
            What type of website you are going for?
          </p>
        </div>
        <h3>Layout option</h3>
        <question-radio :itemsRadioInput="questB"
                        v-model:checkedRadio="valueQuestB"
                        idGroup="quest0"/>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import itemsStepBefore from '@/components/mixinsDate/itemsStepBefore';

export default {
  name: 'StepBeforeTwo',
  mixins: [itemsStepBefore],
  props: {},
  data() {
    return {
      valueQuestB: 3
    };
  },
  methods: {
    ...mapActions([
      'ADD_VARIANT'
    ]),
    submitForm() {
      this.ADD_VARIANT([this.valueQuestB]);
    }
  }
};
</script>

<style lang="sass">
</style>
