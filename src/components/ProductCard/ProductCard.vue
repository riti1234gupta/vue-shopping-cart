<script lang="ts" setup>
import { computed, defineProps } from 'vue'
import Rating from 'primevue/rating';
import { useCartStore } from '@/stores/cartStore';
const props = defineProps<{
  id: number
  title: string
  price: number
  description: string
  cataegory: string
  image: string
  rating: {
    rate: number
    count: number
  }
}>();
const cartStore = useCartStore();
const isInCart = computed(() => {
  return cartStore.products.some(product => product.id === props.id)
})
const  handleCartToggle=()=> {
  if (isInCart.value) {
    cartStore.removeFromCart(props.id)
  } else {
    cartStore.addToCart({
      id: props.id,
      title: props.title,
      price: props.price,
      description: props.description,
      category: props.cataegory,
      image: props.image,
      rating: props.rating,
    })
  }
}
</script>
<template>
  <div class="border-2 rounded-2xl flex flex-col justify-between">
    <div class="w-[50%] m-auto">
      <img :src="props.image" alt="Item image" />
    </div>
   <div class="bg-amber-50 p-4">
    <div class="text-2xl font-extrabold text-center">{{ props.title }}</div>
    <div class="text-lg font-bold text-left mt-2">{{ props.cataegory }}</div>
    <div class="text-justify text-xl mt-2">{{ props.description }}</div>
    <div>{{ props.price }}</div>
     <div class="card flex justify-center">
        <Rating v-model="props.rating.rate" />
    </div>

      <button @click="handleCartToggle" class="px-5 py-3 rounded-full text-white bg-amber-600">
        {{ isInCart?"Remove from cart":"Add to cart" }}
      </button>
     

    </div>
  </div>
</template>
