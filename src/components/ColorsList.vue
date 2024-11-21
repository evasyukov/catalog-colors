<template>
  <div class="colors-list">
    <!-- фильтр  -->
    <div class="colors-list_filter">
      <ColorsFilter />
    </div>

    <!-- список   -->
    <div class="colors-list_content">
      <div class="header">
        <!-- количество  -->
        <div class="header_amount">
          <span>{{ colors.length }} товаров</span>
        </div>

        <!-- сортировка  -->
        <div class="header_sort">
          <ColorsSort />
        </div>
      </div>

      <div class="items">
        <ItemColor v-for="color in colors" :key="color.id" :color="color" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue"

// components
import ColorsFilter from "./ColorsFilter.vue"
import ItemColor from "./ItemColor.vue"
import ColorsSort from "./ColorsSortModal.vue"

import { useColorsStore } from "../storeColors"

const colorsStore = useColorsStore()
const colors = computed(() => colorsStore.colors)
</script>

<style scoped lang="scss">
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
