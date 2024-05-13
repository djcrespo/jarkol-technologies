<script setup lang="ts">
useHead({
  title: 'Servicios | Jarkol Technologies',
  meta: [
    { name: 'Servicios', content: 'Transformamos desafíos geotérmicos y geofísicos en oportunidades, guiándolo hacia el futuro de la exploración energética.' },
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/jarkol/logo/jarkol.png' }
  ],
})

import services from "public/jarkol/services/services2.json"
import Service2Card from "~/components/cards/Service2Card.vue"
import Gallery from "~/components/sections/servicesCompany/Gallery.vue"

</script>

<template>
  <SectionsServicesCompanyHero class="animate-fade-up" />
  <AtomsContainer class="py-3">
    <Gallery />
  </AtomsContainer>
</template>
