<template>
  <div class="services-block flex-center flex-column">
    <div class="title uppercase">{{ title }}</div>
    <ul class="list flex-center flex-column">
      <li v-for="(item, index) in list" :key="index" class="item uppercase">
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  list: {
    type: Array,
    default: [],
  },
});
</script>

<style lang="scss" scoped>
.services-block {
  margin-top: css-clamp(40px, 60px);

  .title {
    font-size: var(--font-medium);
    font-family: var(--font-neuemontreal-bold);
  }

  .list {
    margin-top: 30px;
    @include mq(max-width 768px) {
      margin-top: 20px;
    }
  }

  .item {
    font-size: var(--font-largest);
    font-family: var(--font-neuemontreal-bold);
    line-height: 1;
    text-align: center;
    @include mq(max-width 768px) {
      @include list-distance(top, 20px);
    }
  }
}
</style>
