<template>
  <div class="header">
    <div class="header_container">
      <div class="burger" @click="toggleMenu">
        <img src="../assets/icons/menu.svg" alt="menu" />
        <div class="dropdown_menu" v-if="isMenuOpen">
          <div class="menu_item">ПРОДУКТЫ</div>
          <div class="menu_item">ЦВЕТА</div>
          <div class="menu_item">ВДОХНОВЕНИЕ</div>
          <div class="menu_item">СОВЕТЫ</div>
          <div class="menu_item">НАЙТИ МАГАЗИН</div>
        </div>
      </div>

      <div class="logo">
        <p>COLORS</p>
      </div>

      <div class="menu">
        <div class="menu_item">ПРОДУКТЫ</div>
        <div class="menu_item">ЦВЕТА</div>
        <div class="menu_item">ВДОХНОВЕНИЕ</div>
        <div class="menu_item">СОВЕТЫ</div>
        <div class="menu_item">НАЙТИ МАГАЗИН</div>
      </div>

      <div class="contact">
        <a href="tel:+79991112233">999-999-99-99</a>
      </div>

      <div class="account">
        <div class="account_item">
          <img src="../assets/icons/search.svg" />
        </div>
        <div class="account_item">
          <img src="../assets/icons/user.svg" />
        </div>
        <div class="account_item">
          <img src="../assets/icons/heart.svg" />
        </div>
        <div class="account_cart">
          <CartModal />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import CartModal from "./CartModal.vue"

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 100px;

  background-color: #fff;

  display: flex;
  align-items: center;

  &_container {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-around;

    .burger {
      display: none;
    }

    .logo {
      display: flex;
      align-items: flex-start;

      font-size: 24px;
      font-weight: 600;

      img {
        padding-top: 4px;
      }
    }

    .menu {
      display: flex;
      align-items: center;
      gap: 24px;

      font-weight: 300;

      &_item {
        width: max-content;
        cursor: pointer;
      }
    }

    .contact {
      display: flex;
      align-items: flex-start;
      flex-direction: column;

      span {
        font-weight: 500;
        text-align: start;
      }

      button {
        padding: 2px 0;

        background: none;
        border: none;

        font-size: 14px;
        color: #bcbdbd;

        cursor: pointer;

        transition: all 0.4s ease;

        &:hover {
          color: #000;
        }
      }
    }

    .account {
      display: flex;
      align-items: center;

      gap: 24px;

      width: 200px;
      height: 20px;

      &_item {
        width: 24px;
        height: 24px;

        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;
      }
    }
  }
}
</style>
