<script lang="ts" setup>
import { useProductStore } from '@/stores/productStore';
const productStore = useProductStore()
</script>

<template>
  <div class="bg-navbar flex flex-row py-6">
    <div class="flex flex-row items-center w-full">
     <input
        v-model="productStore.searchQuery"
        type="text"
        placeholder="Search a product"
        class="bg-white w-[30%] rounded-xl p-3.5"
      />
      <div class="ml-4 bg-searchBtnColor p-3.5 text-white rounded-xl">View cart</div>
    </div>
  </div>
</template>
