<script setup lang="ts">
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import ProductCard from "~/components/sections/products/ProductCard.vue";
import products from "public/jarkol/products/products.json"

// initialize components based on data attribute selectors
onMounted( () => {
  initFlowbite();
})
</script>

<template>
  <section class="lg:pt-5 lg:pb-20 md:pt-24 md:pb-24">
    <AtomsContainer>
      <div class="grid md:grid-cols-4 gap-4">
        <div v-for="(product, index) in products" :key="index">
          <CardsProductCard
              :image='("/jarkol/products/images/products_2/" + product.image)'
              :title="product.title"
              :description="product.description"
              :points="product.points"
              :index="index"
          />
        </div>
      </div>
    </AtomsContainer>
  </section>
</template>
