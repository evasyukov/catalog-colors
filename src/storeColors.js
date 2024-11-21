import { defineStore } from "pinia"

export const useColorsStore = defineStore("colors", {
  state: () => ({
    colors: [],          // массив с красками
    cart: [],            // корзина с товарами
    loading: false,      // Для индикации загрузки
    error: null,         // Для ошибок
  }),

  actions: {
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
