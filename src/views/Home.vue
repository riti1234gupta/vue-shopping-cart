<script setup lang="ts">
import Sidebar from '@/components/Sidbar/Sidebar.vue';
import ProductList from '@/components/ProductList/ProductList.vue';
import { useProductStore } from '@/stores/productStore'
import { onMounted} from 'vue'
import { useUiStore } from '@/stores/uiStore';


const uiStore = useUiStore();

const productStore = useProductStore()
onMounted(() => {
  productStore.fetchProducts()
})
</script>

<template>
    <div class="flex flex-row h-full">
      <Sidebar v-if="uiStore.isOpen" :show-side-bar="uiStore.isOpen" />
      <div class="flex-1 overflow-y-auto p-4">
        <ProductList />
      </div>
    </div>
</template>
