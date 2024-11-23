<template>
  <div class="slider">
    <div class="slider_mobile">
      <div class="breadcrumbs">
        <span>ГЛАВНАЯ</span> • <span>ПРОДУКТЫ</span> • <span>КРАСКИ</span>
      </div>

      <div class="color">Краски</div>
    </div>

    <div class="slider_desktop">
      <button class="btn prev" @click="movePoint('prev')">
        <img src="../assets/icons/arrow.svg" alt="" />
      </button>

      <div class="content">
        <h1>{{ sliderTexts[activePoint].title }}</h1>
        <p class="description">
          {{ sliderTexts[activePoint].description }}
        </p>
      </div>

      <button class="btn next" @click="movePoint('next')">
        <img src="../assets/icons/arrow.svg" alt="" />
      </button>

      <div class="navigation-points">
        <div
          v-for="(point, index) in 5"
          :key="index"
          class="point"
          :class="{ active: index === activePoint }"
          :style="{ left: `${index * 24}px` }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const activePoint = ref(0)

const sliderTexts = [
  {
    title: "Краски",
    description:
      "Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!",
  },
  {
    title: "Другие краски",
    description:
      "Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!",
  },
  {
    title: "Еще краски",
    description:
      "Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!",
  },
  {
    title: "И опять краски",
    description:
      "Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!",
  },
  {
    title: "В конце краски",
    description: "А в описании одно и тоже было",
  },
]

function movePoint(direction) {
  if (direction === "next") {
    activePoint.value = (activePoint.value + 1) % sliderTexts.length
  } else if (direction === "prev") {
    activePoint.value = (activePoint.value - 1 + sliderTexts.length) % sliderTexts.length
  }
}
</script>

<style lang="scss" scoped>
.slider {
  width: 100%;

  .slider_mobile {
    display: none;

    .breadcrumbs {
      display: flex;
      gap: 8px;

      color: #0000004f;
      font-size: 10px;
      letter-spacing: 2px;

      z-index: 1;
    }

    .color {
      font-size: 36px;
      font-weight: 500;
      color: #1f2020;
    }
  }

  .slider_desktop {
    height: 560px;

    background-image: url(../assets/background-slider.png);
    background-repeat: no-repeat;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .content {
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

      @media (max-width: 1024px) {
        h1 {
          font-size: 56px;
          margin-bottom: 12px;
        }
        p {
          font-size: 14px;
        }
      }
    }

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

    .navigation-points {
      width: 124px;
      height: 32px;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 12px;

      border-radius: 16px;

      background-color: #000000;

      position: absolute;
      top: 580px;
      left: 850px;

      z-index: 2;

      .point {
        width: 6px;
        height: 6px;

        border-radius: 50%;
        background-color: #ffffff58;

        transition: left 0.3s ease;

        &.active {
          background-color: #fff;
        }
      }
    }
  }

  @media (max-width: 720px) {
    .slider_desktop {
      display: none;
    }

    .slider_mobile {
      width: 100%;

      display: flex;
      align-items: flex-start;
      flex-direction: column;
      gap: 48px;

      padding: 0 24px;

      .breadcrumbs {
        display: flex;
        gap: 8px;

        color: #0000004f;
        font-size: 10px;
        letter-spacing: 2px;

        z-index: 1;
      }

      .color {
        font-size: 36px;
        font-weight: 500;
        color: #1f2020;
        letter-spacing: -1.5px;
      }
    }
  }
}
</style>
