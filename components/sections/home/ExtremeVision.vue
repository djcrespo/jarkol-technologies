<template>
  <AtomsContainer>
    <div class="flex justify-center items-center lg:pt-10 md:pt-10 pt-10 transition duration-300 ease-in-out hover:scale-110">
      <a href="" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img class="object-cover w-full rounded-t-lg w-full md:h-auto md:w-[18rem] md:rounded-none md:rounded-s-lg" src="/jarkol/novedades/extremevision.png" alt="">
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {{ t('noticies.news_3.title') }}
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {{ t('noticies.news_3.text') }}
          </p>
        </div>
      </a>
    </div>
  </AtomsContainer>
</template>

<script setup lang="ts">
import {useI18n} from "vue-i18n";

const { t } = useI18n()
</script>
