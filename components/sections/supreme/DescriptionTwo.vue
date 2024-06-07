<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-2 mx-auto max-w-screen-xl text-center lg:py-10">
      <h5 class="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
        {{ t('supreme300.description_2.title') }}
      </h5>
      <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-30 dark:text-gray-400">
        {{ t('supreme300.description_2.description') }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import {useI18n} from "vue-i18n";

const { t } = useI18n()
</script>
