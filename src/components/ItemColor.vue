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
        <span>{{ +color.color_price }} ₽</span>

        <button class="btn-add" @click="addToCart">+</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useColorsStore } from "../storeColors"

const colorsStore = useColorsStore()

const props = defineProps({
  color: {
    type: Object,
    required: true,
  },
})

const addToCart = () => {
  colorsStore.addToCart(props.color)
}
</script>

<style scoped lang="scss">
.item-color {
  width: 260px;

  &_image {
    width: 100%;

    img {
      width: 100%;
      height: auto;

      padding: 35px;
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

        @media (max-width: 1024px) {
          width: 50px;
          height: 24px;

          font-size: 24px;

          opacity: 1;
          visibility: visible;
        }

        @media (max-width: 480px) {
          width: 32px;
          height: 18px;
          font-size: 14px;
        }
      }
    }
  }

  &:hover .btn-add {
    opacity: 1;
    visibility: visible;
  }

  @media (max-width: 1024px) {
    width: 200px;
  }

  @media (max-width: 860px) {
    width: 150px;

    .price {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    .btn-add {
      width: 32px;
      height: 28px;
    }
  }

  @media (max-width: 480px) {
    width: 110px;

    &_image {
      img {
        padding: 15px;
      }
    }

    .description {
      font-size: 12px;
    }

    .price {
      font-size: 12px;
    }
  }
}
</style>
