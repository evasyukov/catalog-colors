<template>
  <div class="colors-sort">
    <span @click="toggleModal" class="sort-label">
      {{ activeSort.title }}
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
  <div class="overlay" v-if="isModalOpen" @click="toggleModal"></div>
</template>

<script setup>
import { ref } from "vue"

const emits = defineEmits(["sort"])

const sort = ref([
  { title: "СНАЧАЛА ДОРОГИЕ", active: true },
  { title: "СНАЧАЛА НЕДОРОГИЕ", active: false },
  { title: "СНАЧАЛА ПОПУЛЯРНЫЕ", active: false },
  { title: "СНАЧАЛА НОВЫЕ", active: false },
])

const isModalOpen = ref(false)
const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value
}

const activeSort = ref(sort.value[0])

// выбор сортровки
const selectSort = (item) => {
  sort.value.forEach((sortItem) => {
    sortItem.active = sortItem.title === item.title
  })

  activeSort.value = item
  emits("sort", item.title)

  toggleModal()
}
</script>

<style lang="scss" scoped>
.colors-sort {
  position: relative;
  display: inline-block;

  .sort-label {
    cursor: pointer;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.5px;
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
