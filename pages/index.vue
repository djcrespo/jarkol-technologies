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
        <!--
        <div class="relative md:p-10">
          <div class="z-[2] lg:w-full lg:h-full absolute flex items-center justify-center">
            <div class="lg:p-8 bg-white/70">
              <img class="lg:h-36 lg:w-auto animate-fade-up" src="/jarkol/logo/logo-ori.png" alt="Jarkol Technologies">
            </div>
          </div>
          <div class="z-[1] bg-black/80">
            <SectionsHomeGalleryHero />
          </div>
        </div>
        -->
        <div class="pt-20 relative">
          <div class="z-[2] lg:w-full lg:h-full md:w-max-fullso md:h-auto absolute flex items-center justify-center my-4">
            <div class="p-8 bg-white/70">
              <img class="lg:h-36 md:h-full w-auto animate-fade-up" src="/jarkol/logo/logo-ori.png" alt="Jarkol Technologies">
            </div>
          </div>
          <div class="z-[1] bg-black/80">
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
            </div>
          </section>
          <SectionsHomeNoticies />
        </div>
        <SectionsAboutPodux/>
    </div>
</template>