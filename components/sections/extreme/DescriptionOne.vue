<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-2 mx-auto max-w-screen-xl text-center lg:py-10">
      <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-30 dark:text-gray-400">
        {{ t('extreme.info_part_1') }}
      </p>
      <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-30 dark:text-gray-400">
        {{ t('extreme.info_part_2') }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import {useI18n} from "vue-i18n";

const { t } = useI18n()
</script>
