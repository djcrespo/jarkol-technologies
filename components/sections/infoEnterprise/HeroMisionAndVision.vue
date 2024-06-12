<template>
  <section class="lg:pt-10 lg:pb-5 md:pt-24 md:pb-24">
    <AtomsContainer>
      <div class="grid lg:grid-cols-2 md:grid-cols-1 gap-5 flex justify-center">
        <div class="lg:text-center">
          <a class="block max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ t('nosotros.mission.title') }}</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              {{ t('nosotros.mission.text') }}
            </p>
          </a>
        </div>
        <div class="lg:text-center">
          <a class="block max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ t('nosotros.vision.title') }}</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              {{ t('nosotros.vision.text') }}
            </p>
          </a>
        </div>
      </div>
    </AtomsContainer>
  </section>
</template>
<script setup lang="ts">
import {useI18n} from "vue-i18n";

const { t } = useI18n()
</script>
