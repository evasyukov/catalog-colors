<template>
  <section class="slider">
    <div class="breadcrumb">
      <span>ГЛАВНАЯ</span> • <span>ПРОДУКТЫ</span> • <span>КРАСКИ</span>
    </div>
    <div class="slider_content">
      <h1>Краски</h1>
      <p class="description">
        Идеально подходят для стен и других поверхностей. <br />
        Найди свой идеальный цвет!
      </p>
    </div>

    <div class="slider_controls">
      <button class="btn prev">
        <img src="../assets/icons/arrow.svg" alt="" />
      </button>
      <button class="btn next">
        <img src="../assets/icons/arrow.svg" alt="" />
      </button>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.slider {
  height: 560px;

  background-image: url(../assets/background-slider.png);
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  .breadcrumb {
    display: flex;
    gap: 8px;

    position: absolute;
    top: 40px;
    left: 60px;

    color: #ffffff80;
    font-size: 10px;
    font-weight: 300;
    letter-spacing: 2px;

    span {
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  &_content {
    text-align: center;
    color: #fff;

    h1 {
      font-size: 72px;
      font-weight: 400;

      margin: 0;
      margin-bottom: 24px;
    }

    p {
      font-size: 16px;
      width: 600px;
    }
  }

  &_controls {
    position: absolute;
    width: 100%;

    display: flex;
    justify-content: space-between;

    top: 50%;
    transform: translateY(-50%);

    .btn {
      background: none;
      border: none;
      color: #fff;

      font-size: 24px;
      cursor: pointer;
      padding: 50px;

      &.next img {
        transform: rotate(180deg);
      }
    }
  }
}

@media (max-width: 1024px) {
  .slider {
    &_content {
      h1 {
        font-size: 56px;
        margin-bottom: 12px;
      }

      p {
        font-size: 14px;
      }
    }
  }
}

@media (max-width: 680px) {
  .slider {
    display: none;
  }
}
</style>
