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
    <AtomsContainer class="pb-3">
      <!--
      <SectionsProductsSondasHero />
      <SectionsProductsSondasCaracteristicasSondas />
      <SectionsProductsRegistrosHero />
      <SectionsProductsRegistrosCaracteristicasRegistros />
      -->
      <SectionsProductsProductHero class="animate-fade-up" />
      <SectionsProductsGallery />
      <SectionsProductsAccesoriesHero class="animate-fade-up" />
      <SectionsProductsAccesoriesGallery />
    </AtomsContainer>
  </div>
</template>
