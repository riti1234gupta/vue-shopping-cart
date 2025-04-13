import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [] as any[],
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async fetchProducts() {
      this.loading = true
      this.error = null
      try {
        const response = await axios.get('https://fakestoreapi.com/products')
        this.products = response.data
      } catch (err: any) {
        this.error = err.message || 'Error fetching products'
      } finally {
        this.loading = false
      }
    },
  },
})
