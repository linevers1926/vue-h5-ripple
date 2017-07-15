<template>
  <div style="position:relative;">
    <slot></slot>
    <div class="touch-ripple"></div>
  </div>
</template>
<script>
import touchRipple from './touchRipple';
export default {
  name: 'touch-ripple',
  mounted() {
    this.init();
  },
  beforeDestroy() {
    this.$el.removeEventListener('touchstart', touchRipple.handleTouchStart);
  },
  methods: {
    init() {
      if (this.$el) {
        this.$el.addEventListener('touchstart', touchRipple.handleTouchStart);
      }
    }
  }
}
</script>

<style lang="scss">
@import './ripple.scss'
</style>

