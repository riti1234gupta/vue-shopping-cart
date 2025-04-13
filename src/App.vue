<script setup lang="ts">
import Navbar from './components/Navbar/Navbar.vue'
import { useProductStore } from './stores/productStore'
import { onMounted, ref } from 'vue'
import ProductList from './components/ProductList/ProductList.vue'
import Sidebar from './components/Sidbar/Sidebar.vue'

const isOpen = ref(true)

const toggleSidebar = () => {
  isOpen.value = !isOpen.value
}

const productStore = useProductStore()
onMounted(() => {
  productStore.fetchProducts()
})
</script>

<template>
  <div class="flex flex-col h-screen overflow-hidden">
    <div class="top-0 left-0 w-full z-50">
      <Navbar :show-side-bar="isOpen" :toggle-show-sidebar="toggleSidebar" />
    </div>
    <div class="flex flex-row h-full">
      <Sidebar v-if="isOpen" :show-side-bar="isOpen" />
      <div class="flex-1 overflow-y-auto p-4">
        <ProductList />
      </div>
    </div>
  </div>
</template>
