<template>
  <div class="item-color">
    <div class="item-color_image">
      <img src="../assets/colors/color_one.png" alt="Краска" />
    </div>

    <div class="item-color_info">
      <div class="description">
        <span>Краска Wallquest, Brownsone MS90102</span>
      </div>

      <div class="price">
        <span>3500 ₽</span>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.item-color {
  // border: 1px solid #000;

  width: 278px;
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
    }
  }
}
</style>
