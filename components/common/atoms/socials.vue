<template>
  <ul class="socials flex">
    <li v-for="(social, index) in $tm('global.footer.socials')" class="social">
      <a
        :href="social.url"
        target="_blank"
        @mouseenter="startEventHover(index)"
        @mouseleave="startEventLeave(index)"
        class="social-link uppercase"
      >
        {{ social.label }}
      </a>
    </li>
  </ul>
</template>

<script setup>
import gsap from "gsap";

const splitChars = ref([]);
const timelines = ref([]);

onMounted(() => {
  initSplitChars();
});

const initSplitChars = () => {
  let socials = document.querySelectorAll(".app-footer .social-link");

  socials.forEach((item, index) => {
    const splitchar = new SplitText(item, { type: "chars" });

    const tl = gsap.timeline({ paused: true });
    splitChars.value.push(splitchar);

    splitchar.chars.forEach((char, index) => {
      const yOffset = index % 2 === 0 ? -5 * Math.random() : 5 * Math.random();

      const xOffset = (Math.random() * 2 - 1) * 5;
      const rotateOffset = (Math.random() * 2 - 1) * 5;
      tl.to(
        char,
        {
          y: yOffset,
          x: xOffset,
          rotate: rotateOffset,
          duration: 0.3,
        },
        0
      );
    });

    timelines.value.push(tl);
  });
};

const startEventHover = (index) => {
  timelines.value[index].play();
};

const startEventLeave = (index) => {
  timelines.value[index].reverse();
};
</script>

<style lang="scss" scoped>
.socials {
  --social-distance: 100px;

  width: 100%;
  padding-bottom: 15px;
  border-bottom: 4px solid var(--color-black);

  .social {
    @include list-distance(left, var(--social-distance));
    padding-right: var(--social-distance);
    &:not(:last-child) {
      border-right: 2px solid var(--color-black);
    }
  }

  .social-link {
    font-size: 36px;
    font-family: var(--font-neuemontreal-bold);
    color: var(--color-black);
  }
}
</style>
