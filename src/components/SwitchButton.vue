<template>
  <button class="switch" :class="{ active: modelValue }" @click="toggle">
    <div class="circle"></div>
  </button>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
})

const emits = defineEmits(["update:modelValue"])

function toggle() {
  emits("update:modelValue", !props.modelValue)
}
</script>

<style lang="scss" scoped>
.switch {
  width: 32px;
  height: 22px;

  border-radius: 40px;
  border: none;

  background-color: #f2f2f2;

  display: flex;
  align-items: center;

  position: relative;

  cursor: pointer;

  transition: background-color 0.3s;

  .circle {
    width: 8px;
    height: 8px;

    border-radius: 50%;
    background-color: #1f2020;

    position: absolute;
    left: 7px;

    transition: left 0.3s ease;
  }

  &.active {
    background-color: #7bb899;

    .circle {
      left: 17px;
    }
  }
}
</style>
