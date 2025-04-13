import { defineStore } from 'pinia'
import axios from 'axios'

// Define your state type
interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

interface ProductState {
  products: Product[]
  loading: boolean
  error: string | null
  searchQuery: string
}

export const useProductStore = defineStore('product', {
  state: (): ProductState => ({
    products: [],
    loading: false,
    error: null,
    searchQuery: '',
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
  getters: {
    filteredProducts: (state): Product[] => {
      return state.products.filter((product) =>
        product.title.toLowerCase().includes(state.searchQuery.toLowerCase()),
      )
    },
  },
})
