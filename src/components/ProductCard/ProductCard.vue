<script lang="ts" setup>
import { defineProps } from 'vue'
const props = defineProps<{
  id: number
  title: string
  price: string
  description: string
  cataegory: string
  image: string
  rating: {
    rate: number
    count: number
  }
}>()
</script>
<template>
  <div class="border-2 p-4 bg-blue-200 rounded-2xl">
    <div class="w-[50%] m-auto">
      <img :src="props.image" alt="Item image" />
    </div>

    <div class="text-lg font-extrabold">{{ props.title }}</div>
    <div>{{ props.cataegory }}</div>
    <div>{{ props.description }}</div>
    <div>{{ props.price }}</div>
  </div>
</template>
