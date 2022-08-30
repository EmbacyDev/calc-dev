.<template>
  <div class='main-step step-two'>
    <form>
      <div class="form-w">
        <div class="form-heading-w">
          <h2>Layout Complexity?</h2>
          <p>Take an honest look at your designs. How crazy are we talking?</p>
          <hr>
        </div>
        <question-radio :itemsRadioInput="itemsLayoutRadioInput"
                        v-model:checkedRadio="checkedRadioInputLayout"
                        idGroup="radio2"/>
      </div>
      <div class="form-w flex-row">
        <div class="form-heading-w">
          <h2>How many unique page layouts?</h2>
          <p>Number of pages you’ll need to build manually from scratch</p>
        </div>
        <question-number  :value="numberInputUnique"
                          v-model:valueNumber="numberInputUnique"
                          idInput="unique-input"
                          :max="100"
                          :min="1"
                          :step="1"/>
      </div>
      <div class="form-w flex-row">
        <div class="form-heading-w">
          <h2>How many template-based layouts?</h2>
          <p>Pages you build once, then rinse-and-repeat with different content & assets</p>
        </div>
        <question-number  :value="numberInputTemplate"
                          v-model:valueNumber="numberInputTemplate"
                          idInput="template-input"
                          :max="100"
                          :min="0"
                          :step="1"/>
      </div>
      <div class="form-w">
        <div class="form-heading-w">
          <h2>Interactions complexity</h2>
          <p>Things like animations, transitions and usability quirks that ramp up complexity</p>
          <hr>
        </div>
        <question-radio :itemsRadioInput="itemsInteractionsRadioInput"
                        v-model:checkedRadio="checkedRadioInputTemplate"
                        idGroup="radio3"/>
      </div>
      <div class="form-w">
        <div class="form-heading-w">
          <h2>CMS complexity</h2>
          <p>No CMS? No problem! But if there’s one, we’ll account for setup and hacking time</p>
          <hr>
        </div>
        <question-check-box :itemsCheckBoxInput="itemsCMSCheckBoxInput"
                            v-model:checkedList="CMSCheckBoxInput"/>

      </div>
    </form>
  </div>̧̧
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'StepTwo',
  props: {},
  data() {
    return {
      itemsLayoutRadioInput: [
        { id: 'radio-1', title: 'Simple', value: 150, checked: true },
        { id: 'radio-2', title: 'Middling', value: 250 },
        { id: 'radio-3', title: 'Complex', value: 350 }
      ],
      itemsInteractionsRadioInput: [
        { id: 'radio-4', title: 'Static', value: 155, checked: true },
        { id: 'radio-5', title: 'Medium', value: 255 },
        { id: 'radio-6', title: 'Complex', value: 355 }
      ],
      itemsCMSCheckBoxInput: [
        { id: 'check-2', title: 'Blog', value: 165, checked: false },
        { id: 'check-3', title: 'Case Studies', value: 265, checked: false },
        { id: 'check-4', title: 'Team Members', value: 365, checked: false },
        { id: 'check-5', title: 'Open Roles', value: 465, checked: false },
        { id: 'check-6', title: 'Help Center', value: 565, checked: false },
        { id: 'check-7', title: 'Services', value: 665, checked: false },
        { id: 'check-8', title: 'Podcast', value: 765, checked: false },
        { id: 'check-9', title: 'Other', value: 865, checked: false }
      ],
      checkedRadioInputLayout: 150,
      numberInputUnique: 1,
      numberInputTemplate: 0,
      checkedRadioInputTemplate: 155,
      CMSCheckBoxInput: []
    };
  },
  watch: {},
  methods: {
    ...mapActions([
      'ADD_TOTAL'
    ]),
    submitForm() {
      this.ADD_TOTAL([
        this.checkedRadioInputLayout,
        this.checkedRadioInputTemplate,
        this.numberInputUnique,
        this.numberInputTemplate,
        ...this.CMSCheckBoxInput
      ]);
    }
  }
};
</script>

<style lang="sass">
.step-two
  .form-heading-w
    width: 100%
    h2
      margin-bottom: em(8)

  .form-radio-btn
    display: inline-block
    margin-right: em(10)
    border-radius: em(6)

    .radio_btn
      display: none

      &:checked + label
        background: #ffe0a6

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
      color: #666
      background: rgba(255, 224, 166, 0.71)

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

.step-one .form-w:last-child
  margin-top: em(32)
</style>
