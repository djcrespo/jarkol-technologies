<template>

  <div class="max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a>
      <img class="rounded-t-lg" src="/jarkol/images/img3.jpg" alt="" />
    </a>
    <div class="p-5">
      <a>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {{ t('djimatrice.mapping.title') }}
        </h5>
      </a>
      <div class="grid grid-cols-1 gap-4">
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <strong>{{ t('djimatrice.mapping.text_1.part_1') }}</strong>: {{ t('djimatrice.mapping.text_1.part_2') }}
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <strong>{{ t('djimatrice.mapping.text_2.part_1') }}</strong>: {{ t('djimatrice.mapping.text_2.part_2') }}
        </p>
      </div>
    </div>
  </div>

</template>
<script setup lang="ts">
import {useI18n} from "vue-i18n";

const { t } = useI18n()
</script>
