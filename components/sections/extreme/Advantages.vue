<template>
  <div class="bg-jarkolTwo grid lg:grid-cols-1 md:grid-cols-1 gap-2">
    <div>
      <section>
        <div class="py-3 px-2 mx-auto max-w-screen-xl text-center lg:py-4 flex items-center justify-center">
          <h5 class="text-3xl font-extrabold tracking-tight leading-none text-white md:text-3xl lg:text-4xl dark:text-white">
            {{ t('extreme.title_applications') }}
          </h5>
        </div>
      </section>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-1 lg:gap-4 sm:gap-0 md:gap-4 justify-items-center">
      <div class="flex justify-center items-center m-2 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <p class="mb-2 text-lg font-extrabold lg:text-center text-black lg:text-xl dark:text-gray-400">
          {{ t('extreme.applications[0]') }}
        </p>
      </div>

      <div class="flex justify-center items-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <p class="mb-2 text-lg font-extrabold lg:text-center text-black lg:text-xl dark:text-gray-400">
          {{ t('extreme.applications[1]') }}
        </p>
      </div>

      <div class="flex justify-center items-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <p class="mb-2 text-lg font-extrabold lg:text-center text-black lg:text-xl dark:text-gray-400">
          {{ t('extreme.applications[2]') }}
        </p>
      </div>

      <div class="flex justify-center items-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <p class="mb-2 text-lg font-extrabold lg:text-center text-black lg:text-xl dark:text-gray-400">
          {{ t('extreme.applications[3]') }}
        </p>
      </div>
    </div>

    <div class="py-4 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1 lg:gap-4 sm:gap-0 md:gap-4 justify-items-center">
      <div class="flex justify-center items-center m-2 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <p class="mb-2 text-lg font-extrabold lg:text-center text-black lg:text-xl dark:text-gray-400">
          {{ t('extreme.applications[4]') }}
        </p>
      </div>

      <div class="flex justify-center items-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <p class="mb-2 text-lg font-extrabold lg:text-center text-black lg:text-xl dark:text-gray-400">
          {{ t('extreme.applications[5]') }}
        </p>
      </div>

      <div class="flex justify-center items-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <p class="mb-2 text-lg font-extrabold lg:text-center text-black lg:text-xl dark:text-gray-400">
          {{ t('extreme.applications[6]') }}
        </p>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import {useI18n} from "vue-i18n";

const { t } = useI18n()
</script>
