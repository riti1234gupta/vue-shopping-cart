<script lang="ts" setup>
import { useProductStore } from '@/stores/productStore'
import ProductCard from '../ProductCard/ProductCard.vue'
const productStore = useProductStore()
</script>
<template>
  <div v-if="productStore.loading" class="text-center py-4">Loading Shopping items...</div>

  <div v-else class="grid grid-cols-2 gap-6">
    <ProductCard
      v-for="product in productStore.filteredProducts"
      :key="product.id"
      :id="product.id"
      :title="product.title"
      :price="product.price"
      :description="product.description"
      :cataegory="product.category"
      :image="product.image"
      :rating="product.rating"
    />
  </div>
</template>
