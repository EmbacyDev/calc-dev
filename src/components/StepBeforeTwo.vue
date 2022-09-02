<template>
  <div class='main-step step-before'>
    <form>
      <div class="form-w">
        <div class="form-heading-w">
          <h2>Выбор варианта сайта</h2>
          <p>title text</p>
          <hr>
        </div>
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
.step-before
  .form-heading-w
    width: 100%
    h2
      margin-bottom: em(8)

  .input-w
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    align-content: center
    flex-wrap: nowrap
    border: em(1) solid #999
    border-radius: em(6)
    width: auto

</style>
