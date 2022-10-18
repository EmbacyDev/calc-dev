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
    <div class="modal">
      <div class="info-text"
           v-for="item in tipTexts"
           :key="item.text">
        <p class="title-modal">
          {{ item.title }}
        </p>
        <p class="text-modal">
          {{ item.text }}
        </p>
        <a class="link-modal"
           :href=item.links[0].href>
          {{ item.links[0].linkName }},
        </a>
        <a v-if="item.links.length > 1"
           class="link-modal"
           :href=item.links[1].href>
          {{ item.links[1].linkName }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoModal',
  data() {
    return {
      tipTexts: [
        {
          title: 'Basic',
          text: 'This is how majority of industry standard website look like. eg:',
          links: [
            {
              href: 'https://www.slash.com/',
              linkName: 'slash.com'
            },
            {
              href: 'https://www.multigate.io/',
              linkName: 'multigate.io'
            }
          ]
        },
        {
          title: 'Custom',
          text: 'Choose this if you have something crazy in mind or find your task complex. eg:',
          links: [
            {
              href: 'https://quasar.moscow/',
              linkName: 'quasar.moscow'
            },
            {
              href: 'https://seen.io/',
              linkName: 'seen.io'
            }
          ]
        }
      ]
    };
  },
  methods: {
    openModal() {
      console.log('click');
    }
  }
};

</script>

<style scoped lang="sass">
.modal-w
  margin-left: em(8)
  position: relative
  width: auto
  .btn-modal
    width: em(24)
    height: em(24)
    color: $lgr
    +linkHover
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
    grid-template-rows: repeat(2, auto)
    gap: em(24) 0
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
</style>
