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
  <section class="lg:pt-10 md:pt-2  0">
    <AtomsContainer>
      <div class="grid md:grid-cols-3 gap-7 justify-center items-center">
        <CardsPrincipalProductCard
            image="/jarkol/novedades/extremevision.png"
            title="ExtremeVISION"
            description=""
            short_description=""
            :points="[]"
            :index="0"
        />
        <CardsPrincipalProductCard
            image="/jarkol/novedades/Supreme300.png"
            title="Supreme300"
            description=""
            short_description=""
            :points="[]"
            :index="1"
        />
        <CardsPrincipalProductCard
            image="/jarkol/novedades/PPS71-Elite.png"
            title="PPS71 ELITE"
            description=""
            short_description=""
            :points="[]"
            :index="2"
        />
      </div>
    </AtomsContainer>
  </section>
</template>
