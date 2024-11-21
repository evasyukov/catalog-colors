<template>
  <section class="slider">
    <div class="slider_content">
      <h1>Краски</h1>
      <p class="description">
        Идеально подходят для стен и других поверхностей. <br />
        Найди свой идеальный цвет!
      </p>
    </div>

    <div class="slider_controls">
      <button class="btn prev"> 
        ‹
      </button>
      <button class="btn next">›</button>
    </div>
  </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.slider {
  height: 560px;

  background-image: url(../assets/background-slider.png);
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

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
      padding: 10px;
    }
  }
}
</style>
