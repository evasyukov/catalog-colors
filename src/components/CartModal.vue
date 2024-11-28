<template>
  <div>
    <button @click="changeVisibleCart" class="cart">
      {{ colorsStore.itemsCount }}
    </button>

    <div class="overlay" v-if="isCartOpen">
      <!-- корзина -->
      <div class="cart-modal">
        <div class="cart-modal_header">
          <p>Корзина</p>
          <button class="close-button" @click="changeVisibleCart">
            <img src="../assets/icons/close.svg" alt="" />
          </button>
        </div>

        <!-- основное содержимое -->
        <div class="cart-modal_body" v-if="colorsStore.cart.length > 0">
          <div class="count">
            <p>{{ colorsStore.itemsCount }} товаров</p>
            <button class="clear-button" @click="clearCart">
              ОЧИСТИТЬ СПИСОК
            </button>
          </div>

          <div class="items">
            <CartItem
              v-for="item in colorsStore.cart"
              :key="item.id"
              :item="item"
            />
          </div>
        </div>

        <div class="cart-modal_empty" v-else>
          <p>Корзина пуста</p>
        </div>

        <!-- нижняя часть корзины -->
        <div class="cart-modal_summary">
          <div class="total-amount">
            <p class="title">Итого:</p>
            <p class="total-price">{{ colorsStore.totalAmount }} ₽</p>
          </div>

          <button class="checkout">ОФОРМИТЬ ЗАКАЗ</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import CartItem from "./CartItem.vue"
import { useColorsStore } from "../storeColors"
const colorsStore = useColorsStore()

const isCartOpen = ref(false)

const clearCart = () => {
  colorsStore.clearCart()
}

const changeVisibleCart = () => {
  isCartOpen.value = !isCartOpen.value
}
</script>

<style lang="scss" scoped>
.cart {
  width: 24px;
  height: 24px;

  border: none;
  border-radius: 50%;
  background-color: #7bb899;

  font-size: 12px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
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
  z-index: 100;
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

      img {
        width: 20px;
        height: 20px;
      }
    }
  }

  &_body {
    overflow-y: auto;
    max-height: 80%;

    .count {
      display: flex;
      justify-content: space-between;

      margin-top: 94px;
      padding-bottom: 10px;

      font-size: 14px;
      background-color: #fff;

      position: sticky;
      top: 0;

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

  &_empty {
    display: flex;
    justify-content: center;

    font-size: 24px;
    font-weight: 300;

    margin-top: 94px;
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
