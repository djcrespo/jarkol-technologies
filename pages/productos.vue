<script setup lang="ts">
useHead({
  title: 'Podructos | Jarkol Technologies',
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
      <SectionsProductsSondasHero />
      <SectionsProductsSondasCaracteristicasSondas />
      <SectionsProductsRegistrosHero />
      <SectionsProductsRegistrosCaracteristicasRegistros />
      <!--
      <SectionsProductsProductHero />
      <SectionsProductsGallery />
      <SectionsProductsAccesoriesHero />
      <SectionsProductsAccesoriesGallery />
      -->
    </AtomsContainer>
  </div>
</template>
