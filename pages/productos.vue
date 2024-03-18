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
    <AtomsContainer>
      <SectionsProductsProductHero />
      <!-- Galeria de productos -->
      <SectionsProductsGallery />
      <!-- Galeria de accesorios -->
      <SectionsProductsAccesoriesGallery />
      <!-- Galeria de otros -->
    </AtomsContainer>
  </div>
</template>
