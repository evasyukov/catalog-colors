<template>
  <div class="filter-list">
    <div class="filter-list_item" v-for="(item, index) in filters" :key="index">
      <SwitchButton v-model="item.active" />
      <span @click="item.active = !item.active">{{ item.label }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue"
import SwitchButton from "./SwitchButton.vue"

const emits = defineEmits(["filter"])

const filters = ref([
  { label: "НОВИНКИ", active: false, key: "isNew" },
  { label: "ЕСТЬ В НАЛИЧИИ", active: false, key: "isStocked" },
  { label: "КОНТРАКТНЫЕ", active: false, key: "isContract" },
  { label: "ЭКСКЛЮЗИВНЫЕ", active: false, key: "isExclusive" },
  { label: "РАСПРОДАЖА", active: false, key: "isSale" },
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
    align-items: center;

    gap: 8px;

    margin: 10px 0;

    user-select: none;
    cursor: pointer;

    span {
      font-size: 12px;
      font-weight: 400;
    }
  }
}
</style>
