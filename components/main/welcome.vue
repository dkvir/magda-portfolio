<template>
  <div class="welcome">
    <div class="texts flex-column justify-end">
      <div class="heading events">{{ $t("home.welcome.headings.events") }}</div>
      <div class="magda flex-center align-end">
        <img src="/images/mgd.png" alt="magda" class="img" />
      </div>
      <div class="heading manager">
        {{ $t("home.welcome.headings.manager") }}
      </div>
    </div>
    <div class="scroll-down-frame flex-center">
      <div ref="arrowElement" class="arrow-element flex-center">
        <nuxt-icon name="scroll-down" class="scroll-down" />
      </div>
    </div>
    <div class="descriptions flex-column justify-center align-end">
      <div class="description uppercase">
        {{ $t("home.welcome.description") }}
      </div>
      <a
        :href="`mailto:inquiries@magda.events?subject=${$t(
          'home.welcome.startEvent.description'
        )}`"
        target="_blank"
        rel="noopener noreferrer"
        @mouseenter="startEventHover"
        @mouseleave="startEventLeave"
        class="start-event uppercase"
      >
        <span class="span">
          {{ $t("home.welcome.startEvent.label") }}
        </span>
      </a>
    </div>
  </div>
</template>

<script setup>
import gsap from "gsap";

const split = ref(null);
let tl = null;
const arrowElement = ref(null);

onMounted(() => {
  tl = gsap.timeline({ paused: true });
  split.value = new SplitText(".welcome .start-event", { type: "chars" });

  split.value.chars.forEach((char, index) => {
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

  const scrambleText1 = new useScrambleText(
    document.querySelector(".welcome .events"),
    {
      timeOffset: 300,
      callback: function () {},
    }
  ).start();
  const scrambleText2 = new useScrambleText(
    document.querySelector(".welcome .manager"),
    {
      timeOffset: 300,
      callback: function () {},
    }
  ).start();

  setTimeout(() => {
    createArrowAnimation();
  }, 500);
});

const startEventHover = () => {
  tl.play();
};

const startEventLeave = () => {
  tl.reverse();
};

function createArrowAnimation() {
  if (!arrowElement.value) return;

  const arrowClone = arrowElement.value.cloneNode(true);
  arrowElement.value.parentNode.appendChild(arrowClone);

  gsap.set(arrowClone, {
    yPercent: -100,
  });

  const arrowTimeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 2,
    delay: 1,
  });

  arrowTimeline
    .to(arrowElement.value, {
      yPercent: 100,
      duration: 1.5,
      ease: "power2.inOut",
    })
    .to(
      arrowClone,
      {
        yPercent: 0,
        duration: 1.5,
        ease: "power2.inOut",
      },
      "<"
    );
}
</script>

<style lang="scss" scoped>
.welcome {
  position: relative;
  width: 100vw;
  height: 100svh;
  padding: 0 var(--page-offset-padding);
  background-color: var(--color-white);
  overflow: hidden;

  .texts {
    @include size(100%);
  }
  .heading {
    font-size: get-vw(400px);
    font-family: var(--font-mangogrotesque-bold);
    line-height: 1;
    color: var(--color-gray);
    &.manager {
      margin-left: auto;
      z-index: 2;
    }
  }
  .magda {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    pointer-events: none;
    .img {
      width: 90%;
      height: auto;
      object-fit: contain;
    }
  }

  .descriptions {
    position: absolute;
    top: 50%;
    right: var(--page-offset-padding);
    padding: var(--page-offset-padding);
    width: 30%;
    transform: translate3d(0, -70%, 0);
  }

  .description {
    font-size: get-vw(30px);
    font-family: var(--font-neuemontreal-bold);
    color: var(--color-black);
    text-align: end;
  }

  .start-event {
    margin-top: 120px;
    font-size: get-vw(80px);
    font-family: var(--font-mangogrotesque-bold);
    color: var(--color-black);
    width: 65%;
    border-bottom: 16px solid var(--color-black);
    opacity: var(--start-opacity, 0.8);
    cursor: pointer;
    @include default-transitions(opacity);
    &:hover {
      --start-opacity: 1;
    }
  }

  :deep(.scroll-down-frame) {
    position: absolute;
    bottom: var(--page-offset-padding);
    left: var(--page-offset-padding);
    overflow: hidden;
    @include size(200px);
    border: 4px solid var(--color-black);
    border-radius: 50%;

    .arrow-element {
      position: absolute;
      inset: 0;
      @include size(100%);
    }
  }

  .scroll-down {
    :deep(svg) {
      height: 68%;
      width: auto;
    }
  }
}
</style>
