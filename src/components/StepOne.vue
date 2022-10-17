<template>
  <div class='main-step step-one'>
    <form>
      <div class="form-w first-line-form">
        <div class="form-heading-w">
          <div class="h-w">
            <h2>Pick your technology?</h2>
          </div>
          <p>We develop no code website on Webflow and
            custom code websites on Vue.js. Bi code os usually
            a go-t for 80& of websites out there, while custom code
            might be useful for something advanced.
            Play with both and see what’s best for you.
          </p>
        </div>
        <div class="form-w">
          <h3>Technology</h3>
          <question-radio :itemsRadioInput="quest0"
                          v-model:checkedRadio="valueQuest0"
                          idGroup="quest4"/>
        </div>
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
</style>
