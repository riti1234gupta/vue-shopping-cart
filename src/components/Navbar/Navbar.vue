<script lang="ts" setup>
import { useProductStore } from '@/stores/productStore';
import { useCartStore } from '@/stores/cartStore';
import { useRoute } from 'vue-router';
const productStore = useProductStore();
const cartStore = useCartStore();
const route = useRoute();
const props = defineProps<{
     showSideBar: boolean;
 toggleShowSidebar: ()=>void;
}>();
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
      <div class="ml-4 bg-searchBtnColor p-3.5 text-white rounded-xl text-center"><router-link to="/cart" > <span class="pi pi-shopping-cart text-white ml-4"></span></router-link>   {{ cartStore.products.length }} </div>
    </div>
  </div>
  <div class="bg-black flex flex-row items-center py-4 ">
        <span
      v-if="route.path === '/'"
      @click="props.toggleShowSidebar"
      class="pi pi-bars text-white ml-4 cursor-pointer"
    ></span>
      <div>
    <router-link v-if="route.path==='/'" to="/cart" > <span class="pi pi-shopping-cart text-white ml-4"></span></router-link> 
     <router-link v-if="route.path==='/cart'" to="/" > <span class="pi pi-home text-white ml-4"></span></router-link> 
  </div>
  </div>
</template>
