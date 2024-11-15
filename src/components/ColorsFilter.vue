<!-- ColorsFilter.vue -->
<template>
  <div class="filter-list">
    <div v-for="(item, index) in filters" :key="index" class="filter-list_item">
      <SwitchButton v-model="item.active" />
      <span>{{ item.label }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import SwitchButton from "./SwitchButton.vue"

const filters = ref([
  { label: "Новинки", active: true },
  { label: "Есть в наличии", active: false },
  { label: "Контрактные", active: false },
  { label: "Эксклюзивные", active: false },
  { label: "Распродажа", active: false },
])
</script>

<style lang="scss" scoped>
.filter-list {
  width: 200px;
    
  &_item {
    display: flex;
    gap: 8px;

    margin: 10px 0;
  }
}
</style>
