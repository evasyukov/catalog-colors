<template>
  <div v-if="loading" class="processing">Загрузка...</div>
  <div v-else-if="error" class="processing">{{ error }}</div>

  <div class="colors-list" v-else>
    <!-- фильтр  -->
    <div class="colors-list_filter">
      <ColorsFilter @filter="filterValue" class="max" />
    </div>

    <!-- список   -->
    <div class="colors-list_content">
      <div class="header">
        <div class="header_amount">
          <span>{{ sortedColors.length }} ТОВАРОВ</span>
        </div>
        <div class="mobile-filter-button">
          <button @click="toggleFilterModal">ФИЛЬТРЫ</button>
        </div>

        <div class="header_sort">
          <ColorsSort @sort="sortValue" />
          <img src="../assets/icons/sort.svg" alt="" />
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

  <div class="filter-modal" v-if="isFilterModalOpen">
    <div class="modal-header" @touchstart="startSwipe" @touchend="endSwipe">
      <div class="swipe-bar"></div>
    </div>
    <ColorsFilter @filter="filterValue" />
  </div>

  <div
    class="overlay"
    v-if="isFilterModalOpen"
    @click="toggleFilterModal"
  ></div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from "vue"

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

const isMobile = ref(window.innerWidth < 1020)
const isFilterModalOpen = ref(false)

const checkScreenSize = () => {
  isMobile.value = window.innerWidth <= 1020
}

const toggleFilterModal = () => {
  isFilterModalOpen.value = !isFilterModalOpen.value
}

onMounted(() => {
  window.addEventListener("resize", checkScreenSize)
})
onUnmounted(() => {
  window.removeEventListener("resize", checkScreenSize)
})

const touchStartY = ref(0)

const startSwipe = (event) => {
  touchStartY.value = event.touches[0].clientY
}

const endSwipe = (event) => {
  const touchEndY = event.changedTouches[0].clientY
  if (touchEndY - touchStartY.value > 70) {
    toggleFilterModal()
  }
}
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
  margin: 72px 64px 140px;

  &_filter {
    width: 220px;
    margin-right: 20px;
  }

  &_content {
    width: 80%;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 90%;

      &_amount {
        width: 200px;
        height: 20px;
        font-weight: 500;
        letter-spacing: 1.5px;
        font-size: 12px;
      }

      &_sort {
        display: flex;
        cursor: pointer;

        img {
          width: 24px;
          height: 24px;
        }

        @media (max-width: 450px) {
          font-size: 10px;
        }
      }
    }

    .items {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: flex-end;

      column-gap: 20px;
    }
  }
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: flex-end;
  z-index: 1;
}

.mobile-filter-button {
  text-align: center;
  display: none;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 12px;
    letter-spacing: 1px;
  }
}

.filter-modal {
  width: 100%;
  height: 60%;

  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;

  background-color: #fff;

  border-top-left-radius: 24px;
  border-top-right-radius: 24px;

  .modal-header {
    display: flex;
    justify-content: center;
    margin: 20px 0;

    .swipe-bar {
      width: 30px;
      height: 4px;

      background-color: #1f2020;
      border-radius: 40px;
    }
  }
}
@media (max-width: 1020px) {
  .colors-list {
    &_filter {
      display: none;
    }

    &_content {
      width: 100%;
    }

    .header_amount {
      display: none;
    }
  }

  .mobile-filter-button {
    display: block;
  }
}

@media (max-width: 1020px) {
  .colors-list {
    &_filter {
      display: none;
    }

    &_content {
      width: 100%;
    }
  }
}
</style>
