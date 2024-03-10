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
    <div class="lg:pb-2.5">
        <!-- Nombre de la empresa con fondo grande -->
        <SectionsHomeHeroSection/>
        <!-- Seccion de noticias -->
        <SectionsHomeNoticies />
        <!--<SectionsHomeGalleryNoticies />-->
        <!-- "Community outreach" -->
        <SectionsAboutPodux/>
        <!-- Galeria de servicios
        <SectionsHomeServices />
        -->
        <!-- Contacto -->
        <!--
        <SectionsHomeClients />
        <SectionsHomePopularPodcasts/>
        <SectionsWhyUs/>
        <SectionsCallToAction/>
        -->
    </div>
</template>