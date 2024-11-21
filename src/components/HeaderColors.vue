<template>
  <div class="header">
    <div class="header_container">
      <div class="logo">COLORS</div>

      <div class="menu">
        <div class="menu_item">ПРОДУКТЫ</div>
        <div class="menu_item">ЦВЕТА</div>
        <div class="menu_item">ВДОХНОВЕНИЕ</div>
        <div class="menu_item">СОВЕТЫ</div>
        <div class="menu_item">НАЙТИ МАГАЗИН</div>
      </div>

      <div class="contact">
        <span>+7 (495) 221-77-69</span>
        <button>Заказать звонок</button>
      </div>

      <div class="account">
        <div class="account_item">
          <!-- <img src="../assets/icons/search.svg" /> -->
        </div>
        <div class="account_item"></div>
        <div class="account_item"></div>
        <div class="account_cart">
          <CartModal />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CartModal from "./CartModal.vue"
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

    .logo {
      font-size: 24px;
      font-weight: 600;

      margin-left: 66px;
    }

    .menu {
      display: flex;
      align-items: center;

      gap: 24px;
      font-weight: 300;
      margin-left: 170px;

      &_item {
        width: max-content;

        cursor: pointer;
      }
    }

    .contact {
      display: flex;
      align-items: flex-start;
      flex-direction: column;

      margin-left: 530px;

      span {
        font-weight: 500;
        width: 150px;
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

      margin-left: 110px;

      width: 200px;
      height: 20px;

      &_item {
        width: 24px;
        height: 24px;

        background-color: #000;
        border-radius: 50%;

        cursor: pointer;
      }
    }
  }
}
</style>
