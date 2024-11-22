import { defineStore } from "pinia"

export const useColorsStore = defineStore("colors", {
  state: () => ({
    colors: [], // массив с красками
    cart: [], // корзина с товарами
    loading: false, // индикации загрузки
    error: null, // ошибка
  }),

  actions: {
    /* Получение списка красок
      {
        "date": "2024-11-21T04:07:20.890Z",      дата создания
        "color_name": "Beulah Block",            название краски
        "color_price": "636.66",                 цена краски            
        "color_image": "colors/color_1.png",     изображение краски
        "isNew": false,                          флажок новинки
        "isStocked": true,                       флажок наличия
        "isSale": true,                          флажок распродажи
        "isExclusive": true,                     флажок экслюзивной краски
        "isContract": false,                     флажок контрактной краски
        "amountFeedback": 7,                     количество отзывов (для сортировки по популярности)
        "id": "1"                                id краски
      }
    */
    async fetchColors() {
      this.loading = true
      this.error = null
      try {
        const response = await fetch(
          "https://673dc1be0118dbfe8608a358.mockapi.io/api/colors"
        )
        if (!response.ok) {
          throw new Error(`Ошибка: ${response.status}`)
        }
        this.colors = await response.json()
      } catch (err) {
        this.error = err.message
      } finally {
        this.loading = false
      }
    },
  },
})
