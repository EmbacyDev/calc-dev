<template>
  <div class='main-step step-one'>
    <form>
      <div class="form-w">
        <div class="form-heading-w">
          <div class="h-w">
            <span class="before-text">H1.</span>
            <h3>Pick you technology?</h3>
          </div>
          <p>title text</p>
          <hr>
        </div>
        <question-radio :itemsRadioInput="quest0"
                        v-model:checkedRadio="valueQuest0"
                        idGroup="quest4"/>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import itemsStepOne from '@/components/mixinsDate/itemsStepOne';

export default {
  name: 'StepOne',
  mixins: [itemsStepOne],
  props: {},
  data() {
    return {
      valueQuest0: 1
    };
  },
  methods: {
    ...mapActions([
      'ADD_VARIANT'
    ]),
    submitForm() {
      this.ADD_VARIANT([this.valueQuest0]);
    }
  }
};
</script>

<style lang="sass">
.step-one
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
