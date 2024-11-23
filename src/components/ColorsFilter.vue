<template>
  <div class="filter-list">
    <div class="filter-list_item" v-for="(item, index) in filters" :key="index">
      <SwitchButton v-model="item.active" />
      <span @click="item.active = !item.active">{{ item.label }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, defineEmits } from "vue"
import SwitchButton from "./SwitchButton.vue"

const emits = defineEmits(["filter"])

const filters = ref([
  { label: "Новинки", active: false, key: "isNew" },
  { label: "Есть в наличии", active: false, key: "isStocked" },
  { label: "Контрактные", active: false, key: "isContract" },
  { label: "Эксклюзивные", active: false, key: "isExclusive" },
  { label: "Распродажа", active: false, key: "isSale" },
])

watch(
  filters,
  (newFilters) => {
    const activeFilters = newFilters.filter((f) => f.active).map((f) => f.key)
    emits("filter", activeFilters)
  },
  { deep: true }
)
</script>

<style lang="scss" scoped>
.filter-list {
  width: 200px;

  &_item {
    display: flex;
    gap: 8px;

    margin: 10px 0;

    user-select: none;

    cursor: pointer;
  }
}

@media (max-width: 1020px) {
  .filter-list {
    width: 100%; /* Модальное окно занимает всю ширину */
    padding: 10px;

    &_item {
      margin: 12px 0;
    }
  }
}
</style>
