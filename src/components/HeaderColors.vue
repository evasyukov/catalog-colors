<template>
  <div class="header">
    <div class="header_container">
      <div class="burger">
        <img src="../assets/icons/menu.svg" alt="menu" />
      </div>

      <div class="logo">
        <p>COLORS</p>
        <img src="../assets/icons/point.svg" alt="" />
      </div>

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
    justify-content: space-around;

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

@media (max-width: 1024px) {
  .header_container {
    .logo {
      font-size: 18px;
      // font-weight: 600;
    }

    .menu {
      display: flex;
      align-items: center;
      gap: 8px;

      font-weight: 300;

      &_item {
        width: max-content;
        cursor: pointer;

        font-size: 13px;
      }
    }

    .contact {
      span {
        font-size: 12px;
        text-align: start;
      }

      button {
        font-size: 12px;
      }
    }

    .account {
      gap: 12px;
    }
  }
}

@media (max-width: 790px) {
  .header_container {
    .logo {
      font-size: 24px;
    }

    .burger {
      display: block;
      width: 24px;
      height: 24px;

      cursor: pointer;
    }

    .account {
      gap: 24px;
    }

    .menu,
    .contact {
      display: none;
    }
  }
}

@media (max-width: 425px) {
  .header_container {
    

    .logo {
      font-size: 24px;
      margin-left: 70px;

      img {
        margin-left: 4px;
      }
    }

    .burger {
      display: block;
      width: 24px;
      height: 24px;

      margin-left: 30px;

      cursor: pointer;
    }

    .account_item:not(:last-child) {
      display: none;
    }

    .account {
      &_cart{
        margin-left: 80px;
      }
    }
  }
}
</style>
