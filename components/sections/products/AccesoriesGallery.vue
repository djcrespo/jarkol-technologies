<script setup lang="ts">
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import ProductCard from "~/components/sections/products/ProductCard.vue";
import accessories from "public/jarkol/products/accessories.json"
import AccesoriesCard from "~/components/cards/AccesoriesCard.vue";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
})
</script>

<template>
  <section class="lg:pt-5 lg:pb-20 md:pt-24 md:pb-24">
    <AtomsContainer>
      <div class="grid md:grid-cols-4 gap-4">
        <div v-for="(object, index) in accessories" :key="index">
          <AccesoriesCard
              :image='("/jarkol/products/images/accesories_2/" + (index + 1) + ".jpg")'
              :title="object.title"
              :description="object.description"
              :points="object.points"
              :index="index"
          />
        </div>
      </div>
    </AtomsContainer>
  </section>
</template>
