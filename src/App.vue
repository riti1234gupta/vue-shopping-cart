<script setup lang="ts">
import Navbar from './components/Navbar/Navbar.vue'
import { useProductStore } from './stores/productStore'
import { onMounted } from 'vue'
import ProductList from './components/ProductList/ProductList.vue'
const productStore = useProductStore()
onMounted(() => {
  productStore.fetchProducts()
})
</script>

<template>
  <Navbar />
  <ProductList />
</template>
