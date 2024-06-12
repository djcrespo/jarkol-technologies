<template>
  <div id="carouselExampleCrossfade" class="relative" data-twe-carousel-init data-twe-interval="15000"
      data-twe-ride="carousel">
    <!-- Carousel items -->
    <div class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
      <!-- First item -->
      <div
          class="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[1500ms] ease-in-out motion-reduce:transition-none" data-twe-carousel-fade data-twe-carousel-item data-twe-carousel-active>
        <div class="relative">
          <img class="w-full bg-cover" src="/jarkol/bg_v2/buenas3/8.jpg" alt="Jarkol Technologies" />
          <div class="absolute inset-0 bg-black opacity-50"></div>
          <div class="absolute inset-0 flex justify-center items-center text-center text-white lg:text-6xl md:text-2xl sm:text-lg font-bold p-4">
            <div class="max-w-full overflow-hidden break-words">
              <p class="my-9">{{ t('home.hero.title_1') }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Second item -->
      <div
          class="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[1500ms] ease-in-out motion-reduce:transition-none" data-twe-carousel-fade data-twe-carousel-item>
        <div class="relative">
          <img src="/jarkol/bg_v2/buenas3/2.jpg" class="block w-full" alt="Jarkol Technologies" />
          <div class="absolute inset-0 bg-black opacity-50"></div>
          <div class="absolute inset-0 flex justify-center items-center text-center text-white lg:text-6xl md:text-2xl sm:text-lg font-bold p-4">
            <div class="max-w-full overflow-hidden break-words">
              <p class="my-9">{{ t('home.hero.title_2') }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Third item -->
      <div
          class="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[1500ms] ease-in-out motion-reduce:transition-none" data-twe-carousel-fade data-twe-carousel-item>
        <div class="relative">
          <img src="/jarkol/bg_v2/buenas3/6.jpg" class="block w-full" alt="Jarkol Technologies" />
          <div class="absolute inset-0 bg-black opacity-50"></div>
          <div class="absolute inset-0 flex justify-center items-center text-center text-white lg:text-6xl md:text-2xl sm:text-lg font-bold p-4">
            <div class="max-w-full overflow-hidden break-words">
              <p class="my-9">{{ t('home.hero.title_3') }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Fourth item -->
      <div
          class="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[1500ms] ease-in-out motion-reduce:transition-none" data-twe-carousel-fade data-twe-carousel-item>
        <div class="relative">
          <img src="/jarkol/bg_v2/buenas3/4.jpg" class="block w-full" alt="Jarkol Technologies" />
          <div class="absolute inset-0 bg-black opacity-50"></div>
          <div class="absolute inset-0 flex justify-center items-center text-center text-white lg:text-6xl md:text-2xl sm:text-lg font-bold p-4">
            <div class="max-w-full overflow-hidden break-words">
              <p class="my-9">{{ t('home.hero.title_4') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useI18n } from 'vue-i18n';

const { t } = useI18n()

onMounted(async () => {
  const { Carousel, initTWE } = await import("tw-elements");
  initTWE({ Carousel }, { interval: 50000 });
});
</script>
