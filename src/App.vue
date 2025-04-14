<script setup lang="ts">
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar/Navbar.vue';
import { useUiStore } from './stores/uiStore';

import 'primeicons/primeicons.css'

const uiStore = useUiStore();
</script>

<template>
   <div class="flex flex-col h-screen overflow-hidden">
     <div class="top-0 left-0 w-full z-50">
      <Navbar :show-side-bar="uiStore.isOpen" :toggle-show-sidebar="uiStore.toggleSidebar" />
    </div>
    <RouterView/>
   </div>

</template>
