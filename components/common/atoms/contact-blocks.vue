<template>
  <div class="contact-blocks flex-center justify-between">
    <div class="block flex-center flex-column">
      <div class="label">{{ $t("global.footer.email.label") }}</div>
      <a
        :href="`mailto:inquiries@magda.events?subject=${$t(
          'home.welcome.startEvent.description'
        )}`"
        target="_blank"
        rel="noopener noreferrer"
        class="value uppercase"
      >
        inquiries@magda.events
      </a>
    </div>
    <div class="block flex-center flex-column">
      <div class="label">{{ $t("global.footer.phone.label") }}</div>
      <a
        :href="`tel:${$t('global.footer.phone.value')}`"
        rel="noopener noreferrer"
        class="value uppercase"
      >
        {{ $t("global.footer.phone.value") }}
      </a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  block: {
    type: Object,
  },
});
</script>

<style lang="scss" scoped>
.contact-blocks {
  width: 75%;
  margin-top: css-clamp(20px, 40px);
  font-family: var(--font-neuemontreal-regular);
  font-size: var(--font-smallest);

  @include mq(max-width 768px) {
    width: 90%;
  }

  @include mq(max-width 540px) {
    width: 100%;
    flex-direction: column;
  }

  .block {
    @include mq(max-width 540px) {
      @include list-distance(top, 20px);
    }
  }

  .label {
    color: var(--color-black);
    line-height: 1;
  }
  .value {
    position: relative;
    margin-top: 10px;
    color: var(--color-black);
    line-height: 1;

    &:hover {
      --line-width: 100%;
    }

    &:before {
      position: absolute;
      content: "";
      left: 0;
      bottom: -10px;
      right: 0;
      margin: 0 auto;
      width: var(--line-width, 0);
      height: 3px;
      background-color: var(--color-black);
      transition: 0.3s ease;
    }
  }
}
</style>
