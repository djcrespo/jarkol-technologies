<template>
  <div class="pt-30 md:pt-30 bg-[url('public/jarkol/bg_v2/buenas2/4.jpg')] bg-cover bg-center">
    <div class="bg-[#3B408C] bg-opacity-70">
      <section class="pt-30 md:pt-30" style="padding-top: 10rem;">
        <AtomsContainer>
          <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-10">
            <h3 class="mb-4 text-2xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white animate-fade-up">
              {{ t('services.title') }}
            </h3>
            <!--
            <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 animate-fade-up animate-delay-500">
              <a href="/cotizar" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                {{ t('services.button_1') }}
                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </a>
              <a href="/contacto" class="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70">
                {{ t('services.button_2') }}
              </a>
            </div>
            -->
          </div>
        </AtomsContainer>
      </section>
    </div>
  </div>
</template>
<script setup lang="ts">
import {useI18n} from "vue-i18n";

const { t } = useI18n()
</script>
