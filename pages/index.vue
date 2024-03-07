<script setup lang="ts">
import GenericGallery from "~/components/sections/home/GenericGallery.vue";

useHead({
  title: 'Jarkol Technologies',
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
        <!-- Nombre de la empresa con fondo grande -->
        <SectionsHomeHeroSection/>
        <!-- Galería generica -->
        <SectionsHomeGenericGallery />
        <!-- "Community outreach" -->
        <SectionsAboutPodux/>
        <!-- Galeria de servicios -->
        <SectionsHomeServices />
        <!-- Contacto -->
        <!--
        <SectionsHomeClients />
        <SectionsHomePopularPodcasts/>
        <SectionsWhyUs/>
        <SectionsCallToAction/>
        -->
    </div>
</template>