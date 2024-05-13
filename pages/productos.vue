<script setup lang="ts">
useHead({
  title: 'Productos | Jarkol Technologies',
  meta: [
    { name: 'description', content: 'Transformamos desafíos geotérmicos y geofísicos en oportunidades, guiándolo hacia el futuro de la exploración energética.' },
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/jarkol/logo/jarkol.png' }
  ],
})
</script>

<template>
  <div>
    <SectionsProductsPrincipalProductsHero class="animate-fade-up" />
    <AtomsContainer class="pb-3">
      <SectionsProductsPrincipalProductsSection />
    </AtomsContainer>

    <SectionsProductsProductHero class="animate-fade-up" />
    <AtomsContainer class="pb-3">
      <SectionsProductsGallery />
    </AtomsContainer>

    <SectionsProductsAccesoriesHero class="animate-fade-up" />
    <AtomsContainer class="pb-3">
      <SectionsProductsAccesoriesGallery />
    </AtomsContainer>
  </div>
</template>
