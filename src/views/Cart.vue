<script setup lang="ts">
import { useCartStore } from '@/stores/cartStore';
import ProductInCartCard from '@/components/ProductInCartCard/ProductInCartCard.vue';
const cartStore = useCartStore();
</script>
<template>
    <div v-if="cartStore.products.length===0" class="text-center py-4">No items in cart</div>

  <div v-else class="grid grid-cols-2 gap-6">
    <ProductInCartCard
      v-for="product in cartStore.products"
      :key="product.id"
      :id="product.id"
      :title="product.title"
      :price="product.price"
      :cataegory="product.category"
      :image="product.image"
    />
  </div>
</template>