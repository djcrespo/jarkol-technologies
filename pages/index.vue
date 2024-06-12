<script setup lang="ts">
import GenericGallery from "~/components/sections/home/GenericGallery.vue";
import { useI18n } from 'vue-i18n';

useHead({
  title: 'Jarkol Technologies',
  meta: [
    { name: 'description', content: 'Transformamos desafíos geotérmicos y geofísicos en oportunidades, guiándolo hacia el futuro de la exploración energética.' },
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/jarkol/logo/jarkol.png' }
  ],
})

const { t, locale } = useI18n()

const changeLocale = (newLocale: string) => {
  locale.value = newLocale
}
</script>

<template>
    <div class="lg:pb-2.5">
        <div class="pt-20 relative">
          <div class="z-[2] w-full lg:h-4/5 md:h-3/4 absolute flex items-center justify-center my-4">
            <div class="p-8">
            </div>
          </div>
          <div class="z-[1] bg-white/85">
            <SectionsHomeGalleryHero class="animate-fade-up" />
          </div>
        </div>

      <div class="py-10 relative">
        <LazySectionsHomeGalleryOpportunities />
      </div>
        <div class="pt-30 md:pt-30 bg-[url('public/jarkol/backgrounds/news/img2.jpg')] bg-cover bg-center">
          <div class="bg-jarkolTwo bg-opacity-70 my-4 pb-8">
            <section>
              <div class="py-3 px-2 mx-auto max-w-screen-xl text-center lg:py-4 flex items-center justify-center">
                <h5 class="text-5xl font-extrabold tracking-tight leading-none text-white md:text-3xl lg:text-4xl dark:text-white">
                  {{ t('home.news') }}
                </h5>
              </div>
            </section>
            <SectionsHomeNoticies />
          </div>
        </div>
        <SectionsAboutPodux/>
    </div>
</template>
