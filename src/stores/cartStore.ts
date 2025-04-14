import { defineStore } from 'pinia'
import type { Product } from './productStore'

interface CartState {
  products: Product[]
}

export const useCartStore = defineStore('cart', {
  state: (): CartState => ({
    products: [],
  }),

  actions: {
    addToCart(item: Product) {
      const existing = this.products.find((product) => product.id === item.id)

      if (!existing) {
        this.products.push(item)
      } else {
        console.log('Item already in cart!')
      }
    },

    removeFromCart(productId: number) {
      this.products = this.products.filter((product) => product.id !== productId)
    },
  },
})
