<template>
  <Html
    :class="[
      {
        'is-loaded': homeStore.websiteLoaded,
      },
    ]"
  >
    <Body>
      <div class="default-layout">
        <common-app-header />
        <slot />
        <common-app-footer />
      </div>
    </Body>
  </Html>
</template>

<script setup>
import { useHomeStore } from "@/store/home";
const homeStore = useHomeStore();

const config = useRuntimeConfig();

useSeoMeta({
  title: "Magda Patsiashvili - Event Manager",
  ogTitle: "Magda Patsiashvili",
  description: "Event Manager",
  ogDescription: "Event Manager",
  ogImage: config.public.siteUrl + "/images/share.png",
  twitterCard: "summary_large_image",
});

onBeforeMount(() => {
  useLenisScroll();
  homeStore.changeWebsiteLoaded(true);
});
</script>

<style lang="scss" scoped>
.default-layout {
  width: 100%;
  height: 100%;
  margin-bottom: var(--footer-height);
}
</style>
