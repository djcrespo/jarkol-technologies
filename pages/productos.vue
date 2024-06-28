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

const pdfUrl = ref('/jarkol/documents/sondas.pdf');

const downloadPdf = () => {
  const link = document.createElement('a');
  link.href = pdfUrl.value;
  link.download = 'PPS Catalogue-V08.pdf'; // Name of the downloaded file
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
</script>

<template>
  <div>
    <SectionsProductsPrincipalProductsHero class="animate-fade-up" />
    <AtomsContainer class="pt-10 pb-5 lg:pt-5 lg:pb-0 md:pt-5 mb-0">
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

    <SectionsProductsDownholeHero class="animate-fade-up" @click="downloadPdf" />
  </div>
</template>
