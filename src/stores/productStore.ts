import { defineStore } from 'pinia'
import axios from 'axios'

export interface Product {
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
  sortOrder: 'Asc' | 'Desc' | '' // Add this!
  rating: number
}

export const useProductStore = defineStore('product', {
  state: (): ProductState => ({
    products: [],
    loading: false,
    error: null,
    searchQuery: '',
    sortOrder: '', // Default: no sorting
    rating: 0,
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
    setSortOrder(order: 'Asc' | 'Desc' | '') {
      this.sortOrder = order
    },
    setRating(rating: number) {
      this.rating = rating
    },
  },

  getters: {
    filteredProducts: (state): Product[] => {
      let filtered = [...state.products]

      if (state.searchQuery.trim()) {
        filtered = filtered.filter((product) =>
          product.title.toLowerCase().includes(state.searchQuery.toLowerCase()),
        )
      }

      if (state.rating > 0) {
        filtered = filtered.filter((product) => product.rating.rate >= state.rating)
      }

      if (state.sortOrder === 'Asc') {
        filtered = filtered.sort((a, b) => a.price - b.price)
      } else if (state.sortOrder === 'Desc') {
        filtered = filtered.sort((a, b) => b.price - a.price)
      }

      return filtered
    },
  },
})
