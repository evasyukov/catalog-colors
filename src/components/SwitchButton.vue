<template>
    <div class="switch" @click="toggle">
      <div class="circle" :class="{ active: isActive }"></div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch, defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    modelValue: {
      type: Boolean,
      default: false,
    },
  });
  
  const emit = defineEmits(['update:modelValue']);
  
  const isActive = ref(props.modelValue);
  
  watch(
    () => props.modelValue,
    (newValue) => {
      isActive.value = newValue;
    }
  );
  
  function toggle() {
    isActive.value = !isActive.value;
    emit('update:modelValue', isActive.value);
  }
  </script>
  
  <style scoped>
  .switch {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  
  .circle {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #333;
    transition: background-color 0.3s;
  }
  
  .circle.active {
    background-color: #6AB89F; /* Цвет активного состояния */
  }
  </style>
  