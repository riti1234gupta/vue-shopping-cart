<script setup lang="ts">
import RadioButton from 'primevue/radiobutton';
import Rating from 'primevue/rating';
import { ref, watch } from 'vue';
import { useProductStore } from '@/stores/productStore';
const productStore=useProductStore()
const filter = ref<"Asc" | "Desc" | "">('');
const rating = ref();
const props = defineProps<{
  showSideBar: boolean;
 
}>();

watch(filter, (newValue) => {
  if (newValue) {
    productStore.setSortOrder(newValue);
  }
});
watch(rating, (newValue) => {
    if (rating)
    {
        productStore.setRating(newValue);
}
})
</script>

<template>
  <div
    :class="[
      'h-screen w-64 bg-gray-800 text-white p-4 transition-transform duration-300 z-50',
      props.showSideBar ? 'translate-x-0' : '-translate-x-64'
    ]"
  >
    <h2 class="text-2xl font-bold mb-4">Filter Products</h2>

    <ul class="space-y-4">
      <li><RadioButton v-model="filter" inputId="Asc" name="Asc" value="Asc" />
                <label for="Asc">Ascending price</label></li>
      <li> <RadioButton v-model="filter" inputId="Desc" name="Desc" value="Desc" />
                <label for="Desc">Desceding price</label></li>
    </ul>

     <div class="card flex justify-center">
        <Rating v-model="rating" />
    </div>
  </div>
</template>
