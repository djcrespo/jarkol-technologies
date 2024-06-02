<script setup lang="ts">
import {computed, onMounted} from 'vue'
import { initFlowbite } from 'flowbite'
import ProductCard from "~/components/sections/products/ProductCard.vue";
import accessories_es from "public/jarkol/products/accessories_es.json"
import accessories_en from "public/jarkol/products/accessories_en.json"
import AccesoriesCard from "~/components/cards/AccesoriesCard.vue";
import {useI18n} from "vue-i18n";

const { t, locale } = useI18n()

const currentLocale = computed(() => locale.value)

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
})
</script>

<template>
  <section class="lg:pt-5 lg:pb-20 md:pt-24 md:pb-24">
    <AtomsContainer>
      <div class="grid md:grid-cols-4 gap-4">
        <div v-for="(object, index) in (currentLocale === 'es' ? accessories_es : accessories_en)" :key="index">
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
