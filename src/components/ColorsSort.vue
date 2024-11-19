<template>
  <div class="colors-sort">
    <span @click="toggleModal" class="sort-label">
      {{ activeSort ? activeSort.label : "Выберите сортировку" }}
    </span>

    <!-- модальное окно  -->
    <div class="modal" v-if="isModalOpen">
      <div
        v-for="item in sort"
        :key="item.label"
        class="modal_item"
        @click="selectSort(item)"
      >
        {{ item.label }}
      </div>
    </div>
  </div>

  <!-- фон модального окна  -->
  <div class="overlay" v-if="isModalOpen" @click="isModalOpen = false"></div>
</template>

<script setup>
import { computed, ref } from "vue"

const sort = ref([
  { label: "СНАЧАЛА ДОРОГИЕ", active: true },
  { label: "СНАЧАЛА НЕДОРОГИЕ", active: false },
  { label: "СНАЧАЛА ПОПУЛЯРНЫЕ", active: false },
  { label: "СНАЧАЛА НОВЫЕ", active: false },
])

const isModalOpen = ref(false)

const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value
}


const selectSort = (item) => {
  sort.value.forEach((el) => {
    el.active = false
  })

  item.active = true
  isModalOpen = false
}

const activeSort = computed(() => {
  sort.value.find((item) => item.active)
})
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
  // height: 198px;

  background-color: #fff;

  position: absolute;
  top: 0;
  right: 0;

  z-index: 10;

  .modal_item {
    // width: 280px;
    // height: 48px;

    display: flex;
    align-items: center;
    // justify-content: center;

    font-size: 12px;
    font-weight: 500;

    padding: 16px 24px;
    cursor: pointer;

    background-color: #fff;

    &:hover {
      background-color: #00000017;
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
