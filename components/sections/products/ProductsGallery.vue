<script setup lang="ts">
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import ProductCard from "~/components/sections/products/ProductCard.vue";
import products from "public/jarkol/products/products.json"
// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
})
</script>

<template>
  <section class="lg:pt-5 lg:pb-20 md:pt-24 md:pb-24">
    <AtomsContainer>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div v-for="product in products">
          <ProductCard :image='("/jarkol/products/images/products/" + product.image)' :title="product.title" />
        </div>
      </div>
    </AtomsContainer>
  </section>
</template>
