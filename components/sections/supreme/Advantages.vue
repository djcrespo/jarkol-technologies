<template>
  <div class="bg-jarkolTwo grid lg:grid-cols-1 md:grid-cols-1 gap-2">
    <div>
      <section>
        <div class="py-3 px-2 mx-auto max-w-screen-xl text-center lg:py-4 flex items-center justify-center">
          <h5 class="text-3xl font-extrabold tracking-tight leading-none text-white md:text-3xl lg:text-4xl dark:text-white">
            {{ t('supreme300.advantages.title') }}
          </h5>
        </div>
      </section>
    </div>
    <div class="grid lg:grid-cols-3 md:grid-cols-1 lg:gap-4 sm:gap-0 md:gap-0">
      <div class="m-6 text-center">
        <p class="mb-4 text-xl font-extrabold tracking-tight leading-none text-white md:text-xl lg:text-2xl dark:text-white">
          {{ t('supreme300.advantages.ven_1.title') }}
        </p>
        <p class="mb-2 text-lg font-normal lg:text-center text-white lg:text-xl dark:text-gray-400">
          {{ t('supreme300.advantages.ven_1.text') }}
        </p>
      </div>
      <div class="m-6 text-center">
        <p class="mb-4 text-xl font-extrabold tracking-tight leading-none text-white md:text-xl lg:text-2xl dark:text-white">
          {{ t('supreme300.advantages.ven_2.title') }}
        </p>
        <p class="mb-2 text-lg font-normal lg:text-center text-white lg:text-xl dark:text-gray-400">
          {{ t('supreme300.advantages.ven_2.text') }}
        </p>
      </div>
      <div class="m-6 text-center">
        <p class="mb-4 text-xl font-extrabold tracking-tight leading-none text-white md:text-xl lg:text-2xl dark:text-white">
          {{ t('supreme300.advantages.ven_3.title') }}
        </p>
        <p class="mb-2 text-lg font-normal lg:text-center text-white lg:text-xl dark:text-gray-400">
          {{ t('supreme300.advantages.ven_3.text') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useI18n} from "vue-i18n";

const { t } = useI18n()
</script>
