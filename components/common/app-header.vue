<template>
  <ul class="app-header flex-center justify-between">
    <li
      v-for="(item, index) in $tm('global.header')"
      :key="index"
      @click="scrollTo(item)"
      :class="['item uppercase', { 'is-disabled': item.disabled }]"
    >
      {{ item.label }}
    </li>
  </ul>
</template>

<script setup>
const scrollTo = (item) => {
  if (item.disabled) return;

  const element = document.getElementById(item.label.toLowerCase());

  if (element) {
    window.lenis.scrollTo(element, { duration: 1.5, offset: -80 });
  }
};
</script>

<style lang="scss" scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: var(--page-offset-padding);
  padding-top: 28px;
  z-index: 5;
  mix-blend-mode: difference;
  color: var(--color-white);

  .item {
    font-size: get-vw(64px);
    font-family: var(--font-mangogrotesque-bold);
    cursor: pointer;
    opacity: var(--item-opacity, 1);
    @include default-transitions(opacity);
    &:hover {
      --item-opacity: 0.6;
    }
    &.is-disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
}
</style>
