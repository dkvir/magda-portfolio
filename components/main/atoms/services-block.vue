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
  margin-top: 60px;
  .title {
    font-size: get-vw(48px);
    font-family: var(--font-neuemontreal-bold);
  }

  .list {
    margin-top: 30px;
  }

  .item {
    font-size: get-vw(80px);
    font-family: var(--font-neuemontreal-bold);
    line-height: 1;
  }
}
</style>
