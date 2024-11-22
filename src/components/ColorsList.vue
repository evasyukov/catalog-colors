<template>
  <div v-if="loading" class="processing">Загрузка...</div>
  <div v-else-if="error" class="processing">{{ error }}</div>

  <div class="colors-list" v-else>
    <!-- фильтр  -->
    <div class="colors-list_filter">
      <ColorsFilter @filter="filterValue" />
    </div>

    <!-- список   -->
    <div class="colors-list_content">
      <div class="header">
        <div class="header_amount">
          <span>{{ sortedColors.length }} товаров</span>
        </div>

        <div class="header_sort">
          <ColorsSort @sort="sortValue" />
        </div>
      </div>

      <div class="items">
        <ItemColor
          v-for="color in sortedColors"
          :key="color.id"
          :color="color"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue"
// components
import ColorsFilter from "./ColorsFilter.vue"
import ItemColor from "./ItemColor.vue"
import ColorsSort from "./ColorsSortModal.vue"
// store
import { useColorsStore } from "../storeColors"
const colorsStore = useColorsStore()
const colors = computed(() => colorsStore.colors)
// loading
const loading = computed(() => colorsStore.loading)
const error = computed(() => colorsStore.error)
// sort and filter
const sortCriteria = ref("СНАЧАЛА ДОРОГИЕ")
const activeFilters = ref([])

const sortValue = (title) => {
  sortCriteria.value = title
}
const filterValue = (filters) => {
  activeFilters.value = filters
}

const filteredColors = computed(() => {
  return colors.value.filter((color) => {
    return activeFilters.value.every((filter) => color[filter])
  })
})

const sortedColors = computed(() => {
  const colorsFilter = [...filteredColors.value]

  switch (sortCriteria.value) {
    case "СНАЧАЛА ДОРОГИЕ":
      return colorsFilter.sort((a, b) => b.color_price - a.color_price)
    case "СНАЧАЛА НЕДОРОГИЕ":
      return colorsFilter.sort((a, b) => a.color_price - b.color_price)
    case "СНАЧАЛА ПОПУЛЯРНЫЕ":
      return colorsFilter.sort((a, b) => b.amountFeedback - a.amountFeedback)
    case "СНАЧАЛА НОВЫЕ":
      return colorsFilter.sort((a, b) => new Date(b.date) - new Date(a.date))
    default:
      return colorsFilter.sort((a, b) => b.color_price - a.color_price)
  }
})
</script>

<style scoped lang="scss">
.processing {
  width: 100%;

  margin-top: 30px;

  display: flex;
  justify-content: center;

  font-size: 30px;
}
.colors-list {
  display: flex;

  margin: 72px 64px 0;

  &_filter {
    width: 303px;
    height: 200px;
  }

  &_content {
    width: 80%;
    height: 500px;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      &_amount {
        width: 200px;
        height: 20px;

        font-weight: 400;
      }

      &_sort {
        width: 200px;
        height: 20px;

        display: flex;
        justify-content: flex-end;

        font-size: 12px;
      }
    }

    .items {
      display: flex;
      flex-wrap: wrap; /* Перенос строк */

      column-gap: 20px;
    }
  }
}
</style>
