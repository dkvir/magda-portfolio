<template>
  <div class="services flex-center flex-column">
    <main-atoms-services-block
      :title="$t('home.services.title')"
      :list="$tm('home.services.list')"
      id="services"
    />
    <main-atoms-services-block
      :title="$t('home.focus.title')"
      :list="$tm('home.focus.list')"
      class="focus-block"
      id="focus"
    />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.services {
  width: 100vw;
  height: 100svh;
  color: var(--color-white);
  background-color: var(--color-black);
  padding: var(--page-offset-padding);

  .focus-block {
  }
}
</style>
