<template>
  <div class="modal-w">
    <div class="btn-modal"
         @keydown="openModal"
         @click="openModal">
      <icon-base :iconWidth="20"
                 :iconHeight="20">
        <path fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10 2.196a7.804 7.804 0 1 0 0 15.608 7.804 7.804
                    0 0 0 0-15.608ZM.652 10a9.348 9.348 0 1 1 18.696
                    0 9.348 9.348 0 0
                    1-18.696 0Zm8.576-3.428c0-.432.35-.772.772-.772h.01a.772.772
                    0 0 1 0 1.544H10a.772.772 0 0 1-.772-.772ZM10 9.228c.422
                    0 .772.35 .772.772v3.428a.772.772 0 0 1-1.544
                    0V10c0-.422.35-.772.772-.772Z"/>
      </icon-base>
    </div>
    <transition name="modal">
      <div class="modal"
           v-if="isOpen">
        <div class="info-text"
             v-for="item in tipTexts"
             :key="item.text">
          <p v-if="item.title"
             class="title-modal">
            {{ item.title }}
          </p>
          <p class="text-modal">
            {{ item.text }}
          </p>
          <a v-if="item.links[0]"
             class="link-modal"
             :href=item.links[0].href>
            {{ item.links[0].linkName }},
          </a>
          <a v-if="item.links[1]"
             class="link-modal"
             :href=item.links[1].href>
            {{ item.links[1].linkName }},
          </a>
          <a v-if="item.links[2]"
             class="link-modal"
             :href=item.links[2].href>
            {{ item.links[2].linkName }}
          </a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'InfoModal',
  props: {
    tipTexts: {
      type: Object
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    listenerClicks() {
      if (this.isOpen) document.addEventListener('click', this.onClickOutside);
      else document.removeEventListener('click', this.onClickOutside);
    },
    openModal() {
      this.isOpen = !this.isOpen;
      this.listenerClicks();
    },
    onClickOutside(target) {
      this.isOpen = this.$el.contains(target.target) && this.isOpen;
      this.listenerClicks();
    }
  }
};
</script>

<style scoped lang="sass">
.modal-enter-active
  animation: bounce-in .2s
.modal-leave-active
  animation: bounce-in .2s reverse

@keyframes bounce-in
  0%
    transform: scale(0)
    opacity: 0
  100%
    transform: scale(1)
    opacity: 1

.modal-w
  margin-left: em(8)
  position: relative
  width: auto
  .btn-modal
    width: em(24)
    height: em(24)
    color: $lgr
    z-index: 1
    display: flex
    align-content: center
    justify-content: center
    align-items: center
    +linkHover
    .svg-w
      z-index: -1
  .modal
    position: absolute
    left: em(25)
    top: 0
    width: em(320)
    padding: em(16)
    background-color: $white
    box-shadow: 0 em(4) em(20) rgba(0, 0, 0, 0.06)
    border-radius: em(4)
    display: grid
    grid-template-columns: auto
    grid-template-rows: repeat(1, auto)
    gap: em(24) 0
    z-index: 2
    .info-text
      .title-modal
        +body($size: em(16))
        margin-bottom: em(4)
      .text-modal
        +caption($size: em(14))
        margin-bottom: em(2)
      .link-modal
        margin-right: em(2)
        text-decoration: none
        +linkHover
        +caption($size: em(14), $color: $gr)
@include small-d
  .modal-w
    margin-left: px(8)
    position: static
    width: auto
    .btn-modal
      width: px(24)
      height: px(24)
      color: $lgr
      z-index: 1
      display: flex
      align-content: center
      justify-content: center
      align-items: center
      +linkHover
      .svg-w
        z-index: -1
    .modal
      position: absolute
      left: 0
      top: px(24)
      width: px(320)
      padding: px(16)
      background-color: $white
      box-shadow: 0 px(4) px(20) rgba(0, 0, 0, 0.06)
      border-radius: px(4)
      display: grid
      grid-template-columns: auto
      grid-template-rows: repeat(1, auto)
      gap: px(24) 0
      z-index: 2
      .info-text
        .title-modal
          +body($size: px(16))
          margin-bottom: px(4)
        .text-modal
          +caption($size: px(14))
          margin-bottom: px(2)
        .link-modal
          margin-right: px(2)
          text-decoration: none
          +linkHover
          +caption($size: px(14), $color: $gr)
</style>
