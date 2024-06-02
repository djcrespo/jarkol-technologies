<script setup lang="ts">
import {computed, onMounted} from 'vue'
import { initFlowbite } from 'flowbite'
import products_es from "public/jarkol/products/products_es.json"
import products_en from "public/jarkol/products/products_en.json"
import {useI18n} from "vue-i18n";

const { t, locale } = useI18n()

const currentLocale = computed(() => locale.value)

// initialize components based on data attribute selectors
onMounted( () => {
  initFlowbite();
})
</script>

<template>
  <section class="lg:pt-5 lg:pb-20 md:pt-24 md:pb-24">
    <AtomsContainer>
      <div class="grid md:grid-cols-4 gap-4">
        <div v-for="(product, index) in (currentLocale === 'es' ? products_es : products_en)" :key="index">
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
