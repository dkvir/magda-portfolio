<template>
  <div class="app-footer flex-column justify-between" id="contact">
    <common-atoms-socials />
    <div class="footer-middle flex-center">
      <div class="footer-center flex-center flex-column">
        <div class="center-text">{{ $t("global.footer.centerText") }}</div>
        <common-atoms-contact-blocks />
      </div>
    </div>
    <div class="copyrights flex-center justify-between">
      <div class="name uppercase">Magda Patsiashvili</div>
      <div class="year">© {{ new Date().getFullYear() }}</div>
      <div @click="backtoTop" class="back-top uppercase">Back to top</div>
    </div>
  </div>
</template>

<script setup>
const backtoTop = () => {
  window.lenis.scrollTo(0, { duration: 1.5 });
};
</script>

<style lang="scss" scoped>
.app-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  padding: var(--page-offset-padding);
  width: 100vw;
  height: var(--footer-height);
  background-color: var(--color-white);
  z-index: -1;

  .footer-middle {
    width: 100%;
    color: black;
  }

  .footer-center {
    width: 75%;
  }

  .center-text {
    margin-top: var(--page-offset-padding);
    font-size: 60px;
    font-family: var(--font-neuemontreal-bold);
    text-align: center;
  }

  .copyrights {
    position: relative;
    border-top: 4px solid var(--color-black);
    width: 100%;
    padding-top: 20px;
    font-size: get-vw(36px);
    font-family: var(--font-neuemontreal-bold);
  }

  .year {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .back-top {
    cursor: pointer;
    opacity: var(--top-opacity, 1);
    @include default-transitions(opacity);
    &:hover {
      --top-opacity: 0.6;
    }
  }
}
</style>
