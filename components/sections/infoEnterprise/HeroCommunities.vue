<template>
  <section class="py-4 lg:pt-0 lg:pb-5 md:pt-24 md:pb-24">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-10">
      <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{{ t('nosotros.comunidades.title') }}</h1>
    </div>
    <AtomsContainer>
      <div class="grid lg:grid-cols-2 md:grid-cols-1 gap-5 flex flex-col justify-center">
        <div class="max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a class="flex justify-center" href="#">
            <img class="w-auto h-[160px] rounded-t-lg" src="/jarkol/logo/aaaimx_whithe.png" alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">AAAI Student Chapter Mexico</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {{ t('nosotros.comunidades.text_1') }}
            </p>
            <!--
            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
            -->
          </div>
        </div>

        <div class="max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a class="flex justify-center" href="#">
            <img class="rounded-t-lg" src="/jarkol/logo/fundacion.jpeg" alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Fundación de Apoyo a la Juventud (AIP)</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {{ t('nosotros.comunidades.text_2') }}
            </p>
            <!--
            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
            -->
          </div>

        </div>
      </div>

    </AtomsContainer>

  </section>
</template>
<script setup lang="ts">
import {useI18n} from "vue-i18n";

const { t } = useI18n()
</script>
