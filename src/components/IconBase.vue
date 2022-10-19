<template>
  <div :style="{ width: [wrapWidth], height: [wrapHeight] }"
       class="svg-w">
    <svg xmlns="http://www.w3.org/2000/svg"
         width="100%"
         height="100%"
         :viewBox="viewBox"
         :aria-labelledby="iconName"
         fill="none">
      <g :fill="iconColor">
        <slot/>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'IconBase',
  props: {
    iconName: {
      type: String,
      default: 'box'
    },
    iconWidth: {
      type: [Number, String],
      default: 18
    },
    iconHeight: {
      type: [Number, String],
      default: 18
    },
    iconColor: {
      type: String,
      default: 'currentColor'
    }
  },
  computed: {
    viewBox() {
      return `0 0 ${this.iconWidth} ${this.iconHeight}`;
    },
    wrapWidth() {
      return `${this.iconWidth / this.screenSize()[1]}${this.screenSize()[0]}`;
    },
    wrapHeight() {
      return `${this.iconHeight / this.screenSize()[1]}${this.screenSize()[0]}`;
    }
  },
  methods: {
    screenSize() {
      let size = 'em';
      let factor = 16;
      const width = window.innerWidth
          || document.documentElement.clientWidth
          || document.body.clientWidth;
      if (width < 480) {
        size = 'px';
        factor = 1;
      }
      return [size, factor];
    }
  }
};
</script>

<style scoped lang="sass">
.svg-w
  display: flex
  justify-content: center
  align-items: center
  align-content: center
</style>
