<template>
  <div class="item-color">
    <div class="item-color_image">
      <img :src="color.color_image" alt="Краска" />
    </div>

    <div class="item-color_info">
      <div class="description">
        <span>{{ color.color_name }}</span>
      </div>

      <div class="price">
        <span>{{ color.color_price}} ₽</span>

        <button class="btn-add" @click="addToCart">+</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue"

const props = defineProps({
  color: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped lang="scss">
.item-color {
  width: 260px;
  height: 370px;

  &_image {
    width: 100%;

    img {
      padding: 39px;
    }
  }

  &_info {
    display: flex;
    flex-direction: column;
    gap: 16px;

    font-size: 16px;
    padding-bottom: 22px;

    border-bottom: 1px solid #e6e6e6;

    .description {
      font-weight: 300;
    }

    .price {
      font-weight: 600;

      display: flex;
      align-items: center;
      justify-content: space-between;

      position: relative;

      .btn-add {
        width: 80px;
        height: 32px;

        background-color: #f2f2f2;

        color: #1f2020;

        border: none;
        border-radius: 8px;

        font-size: 30px;
        font-weight: 400;

        display: flex;
        align-items: center;
        justify-content: center;

        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease;

        &:hover {
          cursor: pointer;
          background-color: #7bb899;
        }
      }
    }
  }

  &:hover .btn-add {
    opacity: 1;
    visibility: visible;
  }
}
</style>
