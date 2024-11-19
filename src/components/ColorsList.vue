<template>
  <div class="colors-list">
    <!-- filter  -->
    <div class="colors-list_filter">
      <ColorsFilter />
    </div>

    <!-- list  -->
    <div class="colors-list_content">
      <div class="header">
        <!-- count  -->
        <div class="header_amount">
          <span>412 товаров</span>
        </div>

        <!-- sort  -->
        <div class="header_sort">
          <ColorsSort />
        </div>
      </div>

      <div class="items">
        <ItemColor v-for="item in 5" :key="item" />
      </div>
    </div>
  </div>
</template>

<script setup>
// components
import ColorsFilter from "./ColorsFilter.vue"
import ItemColor from "./ItemColor.vue"
import ColorsSort from "./ColorsSort.vue"
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

      gap: 24px;
    }
  }
}
</style>
