<template>
  <div class="colors-sort">
    <span @click="toggleModal" class="sort-label">
      {{ activeSort ? activeSort.title : "Сортировка" }}
    </span>

    <!-- модальное окно  -->
    <div class="modal" v-if="isModalOpen">
      <div
        v-for="item in sort"
        :key="item.title"
        class="modal_item"
        @click="selectSort(item)"
        :class="{ active: item.active }"
      >
        {{ item.title }}
      </div>
    </div>
  </div>

  <!-- фон модального окна  -->
  <div class="overlay" v-if="isModalOpen" @click="isModalOpen = false"></div>
</template>

<script setup>
import { computed, ref } from "vue"

const sort = ref([
  { title: "СНАЧАЛА ДОРОГИЕ", active: true },
  { title: "СНАЧАЛА НЕДОРОГИЕ", active: false },
  { title: "СНАЧАЛА ПОПУЛЯРНЫЕ", active: false },
  { title: "СНАЧАЛА НОВЫЕ", active: false },
])

const isModalOpen = ref(false)

const activeSort = computed(() => {
  return sort.value.find((item) => item.active)
})

const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value
}

const selectSort = (item) => {
  sort.value.forEach((el) => {
    el.active = false
  })

  item.active = true
  toggleModal()
}
</script>

<style lang="scss" scoped>
.colors-sort {
  position: relative;
  display: inline-block;

  .sort-label {
    cursor: pointer;
    font-weight: bold;
  }
}

.modal {
  width: 280px;

  background-color: #fff;

  position: absolute;
  top: 0;
  right: 0;

  z-index: 10;

  .modal_item {
    display: flex;
    align-items: center;

    font-size: 12px;
    font-weight: 500;

    padding: 16px 24px;
    cursor: pointer;

    background-color: #fff;

    &.active {
      background-color: #7bb899;
    }

    &:hover {
      background-color: #5bb88959;
    }
  }
}

.overlay {
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.7);

  position: fixed;
  top: 0;
  left: 0;
}
</style>
