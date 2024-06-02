<script setup lang="ts">
import {computed, onMounted} from 'vue'
import { initFlowbite } from 'flowbite'
import ProductCard from "~/components/sections/products/ProductCard.vue";
import services_es from "public/jarkol/services/services2_es.json"
import services_en from "public/jarkol/services/services2_en.json"
import Service2Card from "~/components/cards/Service2Card.vue";
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
      <div class="grid md:grid-cols-2 gap-4">
        <div v-for="(service, index) in (currentLocale === 'es' ? services_es : services_en)" :key="index">
          <Service2Card
              :title="service.name"
              :index="index"
              :image='("/jarkol/services/new_services/" + "Slide" + (index + 18) + ".jpeg")'
              :description="service.description"
              :points="service.points"
          />
        </div>
      </div>
    </AtomsContainer>
  </section>
</template>
