<template>
  <div>
    <button @click="isCartOpen = true" class="cart">{{ itemsCount }}</button>

    <div class="overlay" v-if="isCartOpen">
      <!-- cart -->
      <div class="cart-modal">
        <div class="cart-modal_header">
          <p>Корзина</p>
          <button class="close-button" @click="isCartOpen = false">x</button>
        </div>

        <!-- Основное содержимое -->
        <div class="cart-modal_body">
          <div class="count">
            <p>{{ itemsCount }} товара</p>
            <button class="clear-button" @click="clearCart">
              ОЧИСТИТЬ СПИСОК
            </button>
          </div>

          <div class="items">
            <ItemsCart v-for="item in 3" :key="item" />
          </div>
        </div>

        <!-- Нижняя часть корзины -->
        <div class="cart-modal_summary">
          <div class="total-amount">
            <p class="title">Итого:</p>
            <p class="total-price">{{ totalAmount }} ₽</p>
          </div>

          <button class="checkout">ОФОРМИТЬ ЗАКАЗ</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import ItemsCart from "./ItemsCart.vue"

const isCartOpen = ref(false)
const itemsCount = ref(4)
const totalAmount = ref(14400)

const clearCart = () => {
  itemsCount.value = 0
  totalAmount.value = 0
}
</script>

<style lang="scss" scoped>
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

.cart-modal {
  width: 520px;

  background-color: #fff;

  display: flex;
  flex-direction: column;
  padding: 40px;

  &_header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-size: 30px;
      font-weight: 500;
    }

    .close-button {
      width: 36px;
      height: 36px;

      border-radius: 50%;
      background-color: transparent;
      padding: 0;

      border: 1px solid #e6e6e6;
      cursor: pointer;
    }
  }

  &_body {
    .count {
      display: flex;
      justify-content: space-between;

      margin-top: 94px;
      padding-bottom: 10px;

      font-size: 14px;

      p {
        font-weight: 400;
      }

      .clear-button {
        background-color: transparent;
        border: none;
        padding: 0;

        color: #a6a6a6;
        cursor: pointer;

        &:hover {
          color: #505050;
        }
      }
    }
  }

  &_summary {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: auto;

    .total-amount {
      .title {
        font-size: 16px;
        font-weight: 400;
      }

      .total-price {
        font-size: 30px;
        font-weight: 500;
      }
    }

    .checkout {
      background-color: #7bb899;
      color: #1f2020;

      font-size: 12px;
      font-weight: 600;

      border: none;
      border-radius: 4px;

      padding: 20px 60px;

      cursor: pointer;
    }
  }
}
</style>
