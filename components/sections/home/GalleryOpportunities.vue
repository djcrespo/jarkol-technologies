<template>
  <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
    <div class="relative group overflow-hidden">
      <img src="/jarkol/GalleryOpportunities/1.jpg" class="block transition duration-300 ease-in-out group-hover:scale-110" alt="Jarkol Technologies" />
      <div class="absolute inset-0 bg-black opacity-30"></div>
      <div
          class="absolute inset-0 flex flex-col justify-center text-center text-white text-xl lg:text-4xl md:text-3xl sm:text-6xl font-bold p-4">
        <div class="max-w-full max-h-72 overflow-hidden break-words">
          <p class="my-2">{{ t('home.gallery_op.text_1') }}</p>
        </div>
      </div>
    </div>

    <div class="relative group overflow-hidden">
      <img src="/jarkol/GalleryOpportunities/2.jpg"
           class="block transition duration-300 ease-in-out group-hover:scale-110" alt="Jarkol Technologies" />
      <div class="absolute inset-0 bg-black opacity-30"></div>
      <div
          class="absolute inset-0 flex justify-center items-center text-center text-white text-xl lg:text-4xl md:text-3xl sm:text-4xl font-bold p-4">
        <div class="max-w-full overflow-hidden break-words">
          <p class="my-2">{{ t('home.gallery_op.text_2') }}</p>
        </div>
      </div>
    </div>

    <div class="relative group overflow-hidden">
      <img src="/jarkol/GalleryOpportunities/5.jpg"
           class="block transition duration-300 ease-in-out group-hover:scale-110" alt="Jarkol Technologies" />
      <div class="absolute inset-0 bg-black opacity-30"></div>
      <div
          class="absolute inset-0 flex justify-center items-center text-center text-white text-xl lg:text-4xl md:text-3xl sm:text-4xl font-bold p-4">
        <div class="max-w-full overflow-hidden break-words">
          <p  class="my-2">{{ t('home.gallery_op.text_3') }}</p>
        </div>
      </div>
    </div>

    <div class="relative group overflow-hidden">
      <img src="/jarkol/GalleryOpportunities/6.jpeg"
           class="block transition duration-300 ease-in-out group-hover:scale-110" alt="Jarkol Technologies" />
      <div class="absolute inset-0 bg-black opacity-30"></div>
      <div
          class="absolute inset-0 flex justify-center items-center text-center text-white text-xl lg:text-4xl md:text-3xl sm:text-3xl font-bold p-4">
        <div class="max-w-full overflow-hidden break-words">
          <p class="my-2">{{ t('home.gallery_op.text_4') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n()
</script>
