<template>
  <HeaderColors />
  <ColorsList />
</template>

<script setup>
import HeaderColors from "./components/HeaderColors.vue"
import ColorsList from "./components/ColorsList.vue"

import { useColorsStore } from "./storeColors"
import { onMounted } from "vue"

const colorsStore = useColorsStore()
onMounted(() => {
  colorsStore.fetchColors()
})
</script>