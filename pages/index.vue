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
        <!--<SectionsHomeHeroSection/>-->
        <div class="relative">
          <div class="z-[2] w-full h-full absolute flex items-center justify-center">
            <div class="p-8 bg-white/70">
              <img class="h-36 w-auto animate-fade-up" src="/jarkol/logo/logo-ori.png" alt="Jarkol Technologies">
            </div>
          </div>
          <div class="z-[1] relative bg-black/80">
            <SectionsHomeGalleryHero />
          </div>
        </div>
        <!-- Seccion de noticias -->
        <div class="bg-jarkolTwo my-4 pb-8">
          <section>
            <div class="py-3 px-2 mx-auto max-w-screen-xl text-center lg:py-4 flex items-center justify-center">
              <h5 class="text-3xl font-extrabold tracking-tight leading-none text-white md:text-3xl lg:text-4xl dark:text-white">
                Novedades
              </h5>
              <!--
              <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-30 dark:text-gray-400">
                El SUPREME300 no es solo un sensor; es una obra maestra tecnológica, diseñada meticulosamente para soportar las condiciones más exigentes. Capaz de operar de manera continua en temperaturas de hasta 300 °C, esta tecnología pionera garantiza mediciones precisas y confiables en los ambientes más extremos, asegurando la máxima eficiencia y seguridad para su proyecto geotérmico.
              </p>
              -->
            </div>
          </section>
          <SectionsHomeNoticies />
        </div>
        <!-- Carrousel de servicios -->
        <!--<SectionsHomeGalleryNoticies />-->
        <!-- "Community outreach" -->
        <SectionsAboutPodux/>
        <!--<SectionsTestComponent />-->
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