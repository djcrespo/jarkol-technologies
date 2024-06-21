<script setup lang="ts">
import { ref } from 'vue';

useHead({
  title: 'Productos | Jarkol Technologies',
  meta: [
    { name: 'description', content: 'Transformamos desafíos geotérmicos y geofísicos en oportunidades, guiándolo hacia el futuro de la exploración energética.' },
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/jarkol/logo/jarkol.png' }
  ],
});

const showFirstProductsSection = ref(false);
const showSecondProductsSection = ref(false);

const toggleFirstProductsSection = () => {
  showFirstProductsSection.value = !showFirstProductsSection.value;
};

const toggleSecondProductsSection = () => {
  showSecondProductsSection.value = !showSecondProductsSection.value;
};
</script>

<template>
  <div>
    <SectionsProductsPrincipalProductsHero class="animate-fade-up" />
    <AtomsContainer class="pb-3">
      <SectionsProductsPrincipalProductsSection />
    </AtomsContainer>

    <SectionsProductsProductHero class="animate-fade-up" @click="toggleFirstProductsSection" />
    <AtomsContainer v-if="showFirstProductsSection" class="pb-3">
      <SectionsProductsGallery />
    </AtomsContainer>

    <SectionsProductsAccesoriesHero class="animate-fade-up" @click="toggleSecondProductsSection" />
    <AtomsContainer v-if="showSecondProductsSection" class="pb-3">
      <SectionsProductsAccesoriesGallery />
    </AtomsContainer>
  </div>
</template>
