<script setup lang="ts">
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import ProductCard from "~/components/sections/products/ProductCard.vue";
import accessories from "public/jarkol/products/accessories.json"

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
})
</script>

<template>
  <section class="lg:pt-5 lg:pb-20 md:pt-24 md:pb-24">
    <AtomsContainer>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div v-for="object in accessories">
          <ProductCard :image='("/jarkol/products/images/accesories/" + object.image)' :title="object.title" />
        </div>
      </div>
    </AtomsContainer>
  </section>
</template>
