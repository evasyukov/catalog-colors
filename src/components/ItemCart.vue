<template>
  <div class="items">
    <div class="items_image">
      <img :src="item.color_image" alt="Краска" />
    </div>

    <div class="items_info">
      <p class="name">{{ item.color_name }}</p>
      <p class="price">{{ item.color_price }} ₽</p>
    </div>

    <div class="items_amount">
      <button class="btn" @click="updateQuantity(-1)">-</button>
      <div class="amount">{{ item.quantity }}</div>
      <button class="btn" @click="updateQuantity(1)">+</button>
    </div>

    <button class="items_delete" @click="removeItem">x</button>
  </div>
</template>

<script setup>
import { defineProps } from "vue"
import { useColorsStore } from "../storeColors"

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})

const colorsStore = useColorsStore()

const updateQuantity = (amount) => {
  colorsStore.updateQuantity(props.item.id, amount)
}

const removeItem = () => {
  colorsStore.removeFromCart(props.item.id)
}
</script>

<style lang="scss" scoped>
.items {
  display: flex;
  align-items: center;

  border-top: 1px solid #e6e6e6;
  padding: 12px 0;

  &_image {
    margin-right: 8px;
    img {
      width: 96px;
      height: 96px;
    }
  }

  &_info {
    width: 165px;
    height: 68px;

    margin-right: 62px;

    display: flex;
    flex-direction: column;
    gap: 16px;

    .name {
      margin: 0;
      font-weight: 300;
    }

    .price {
      margin: 0;
      font-weight: 600;
    }
  }

  &_amount {
    display: flex;
    align-items: center;

    .btn {
      width: 40px;
      height: 24px;

      background-color: #f2f2f2;

      border: none;
      border-radius: 4px;

      cursor: pointer;
    }

    .amount {
      font-size: 16px;
      margin: 0 20px;
    }
  }

  &_delete {
    width: 24px;
    height: 24px;

    margin-left: auto;

    background-color: transparent;
    border: none;
    padding: 0;

    color: #a6a6a6;
  }
}
</style>
