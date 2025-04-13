<script setup lang="ts">
const props = defineProps<{
  showSideBar: boolean;
 
}>();
</script>

<template>
  <div
    :class="[
      'h-screen w-64 bg-gray-800 text-white p-4 transition-transform duration-300 z-50',
      props.showSideBar ? 'translate-x-0' : '-translate-x-64'
    ]"
  >
    <h2 class="text-2xl font-bold mb-4">My Sidebar</h2>

    <ul class="space-y-2">
      <li><a href="#" class="hover:text-amber-300">Home</a></li>
      <li><a href="#" class="hover:text-amber-300">Products</a></li>
      <li><a href="#" class="hover:text-amber-300">Cart</a></li>
      <li><a href="#" class="hover:text-amber-300">Orders</a></li>
    </ul>
  </div>
</template>
