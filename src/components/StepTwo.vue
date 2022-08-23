.<template>
  <div class='main-step step-two'>
    <form>
      <div class="form-w">
        <div class="form-heading-w">
          <h2>Layout Complexity?</h2>
          <p>Take an honest look at your designs. How crazy are we talking?</p>
          <hr>
        </div>
        <div class="input-radio-w">
          <fieldset id="group1"
                    v-for="item in itemsLayoutRadioInput"
                    :key="item.id"
                    class="form-radio-btn">
            <input :id="item.id"
                   type="radio"
                   class="radio_btn"
                   name="group1"
                   :value="item.value"
                   :checked="item.checked"
                   v-model="checkedRadioInputLayout">
            <label :for="item.id">{{ item.title }}</label>
          </fieldset>
        </div>
      </div>
      <div class="form-w flex-row">
        <div class="form-heading-w">
          <h2>How many unique page layouts?</h2>
          <p>Number of pages you’ll need to build manually from scratch</p>
        </div>
        <div class="input-w">
          <div @click="numberInputUnique++"
               @keydown="numberInputUnique++"
               class="number-input-arrow">
            <icon-base :iconWidth="24"
                       :iconHeight="24">
              <path d="M3 19h18a1 1 0 0 0
            .82-1.57l-9-13c-.37-.54-1.27-.54-1.64 0l-9 13A1 1 0 0 0 3 19z"/>
            </icon-base>
          </div>
          <div class="number-input-w">
            <label for="hourly-rate"
                   class="input-text"/>
            <input type="number"
                   class="number-input"
                   maxlength="256"
                   max="256"
                   min="5"
                   name="field-3"
                   step="5"
                   v-model.trim.number="numberInputUnique"
                   placeholder=""
                   id="hourly-rate">
          </div>
          <div @click="numberInputUnique--"
               @keydown="numberInputUnique--"
               class="number-input-arrow">
            <icon-base :iconWidth="24"
                       :iconHeight="24">
              <path d="M11.18 19.57a1 1 0 0 0 1.64
              0l9-13A1 1 0 0 0 21 5H3a1 1 0 0 0-.82 1.57l9 13z"/>
            </icon-base>
          </div>
        </div>
      </div>
      <div class="form-w flex-row">
        <div class="form-heading-w">
          <h2>How many template-based layouts?</h2>
          <p>Pages you build once, then rinse-and-repeat with different content & assets</p>
        </div>
        <div class="input-w">
          <div @click="numberInputTemplate++"
               @keydown="numberInputTemplate++"
               class="number-input-arrow">
            <icon-base :iconWidth="24"
                       :iconHeight="24">
              <path d="M3 19h18a1 1 0 0 0
            .82-1.57l-9-13c-.37-.54-1.27-.54-1.64 0l-9 13A1 1 0 0 0 3 19z"/>
            </icon-base>
          </div>
          <div class="number-input-w">
            <label for="hourly-rate"
                   class="input-text"/>
            <input type="number"
                   class="number-input"
                   maxlength="256"
                   max="256"
                   min="5"
                   name="field-3"
                   step="5"
                   v-model.trim.number="numberInputTemplate"
                   placeholder=""
                   id="hourly-rate">
          </div>
          <div @click="numberInputTemplate--"
               @keydown="numberInputTemplate--"
               class="number-input-arrow">
            <icon-base :iconWidth="24"
                       :iconHeight="24">
              <path d="M11.18 19.57a1 1 0 0 0 1.64
              0l9-13A1 1 0 0 0 21 5H3a1 1 0 0 0-.82 1.57l9 13z"/>
            </icon-base>
          </div>
        </div>
      </div>
      <div class="form-w">
        <div class="form-heading-w">
          <h2>Interactions complexity</h2>
          <p>Things like animations, transitions and usability quirks that ramp up complexity</p>
          <hr>
        </div>
        <div class="input-radio-w">
          <fieldset id="group2"
                    v-for="item in itemsInteractionsRadioInput"
                    :key="item.id"
                    class="form-radio-btn">
            <input :id="item.id"
                   type="radio"
                   class="radio_btn"
                   name="group2"
                   :value="item.value"
                   :checked="item.checked"
                   v-model="checkedRadioInputTemplate">
            <label :for="item.id">{{ item.title }}</label>
          </fieldset>
        </div>
      </div>
      <div class="form-w">
        <div class="form-heading-w">
          <h2>CMS complexity</h2>
          <p>No CMS? No problemo! But if there’s one, we’ll account for setup and hacking time</p>
          <hr>
        </div>
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
          <fieldset v-for="item in itemsCMSCheckBoxInput"
                    :key="item.id"
                    class="form-radio-btn">
            <input :id="item.id"
                   type="checkbox"
                   class="checkbox_btn"
                   :value="item.value"
                   :checked="item.checked"
                   v-model="item.checked">
            <label :for="item.id">{{ item.title }}</label>
          </fieldset>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'StepTwo',
  components: {},
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
      isCheckAll: true
    };
  },
  computed: {
    checkedList() {
      return this.itemsCMSCheckBoxInput
        .filter(el => el.checked && el.value !== 0)
        .map(el => el.value);
    },
    removeCheckedList() {
      return this.checkedList.length;
    }
  },
  watch: {},
  methods: {
    ...mapActions([
      'ADD_TOTAL'
    ]),
    checkAll() {
      const items = Object.values(this.itemsCMSCheckBoxInput);
      items.forEach(el => {
        el.checked = false;
      });
    },
    submitForm() {
      this.ADD_TOTAL([this.checkedRadioInputLayout, this.checkedRadioInputTemplate,
        this.numberInputUnique, this.numberInputTemplate, ...this.checkedList]);
    }
  }
};
</script>

<style scoped lang="sass">
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

    .number-input-w
      display: flex
      align-content: center
      justify-content: center
      align-items: center

      .number-input
        background: beige
        border: none
        width: em(100)
        height: em(40)

.step-one .form-w:last-child
  margin-top: em(32)
</style>
