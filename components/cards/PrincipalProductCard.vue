<script setup lang="ts">
  import { defineProps, ref, watch, onMounted } from 'vue'

  const { title, description, short_description, points, image, index } = defineProps<{
    title: string,
    image: string,
    description: string,
    short_description: string,
    points: string[],
    index: number
  }>()
</script>

<template>
  <!--
  <a :data-modal-target="'modal-prin-prod-' + index" :data-modal-toggle="'modal-prin-prod-' + index" class="animate-fade">
    <div class="transition duration-300 ease-in-out hover:scale-110">
      <div class="flex justify-center items-center">
        <img class="rounded-t-lg" :src="image" :alt="title" height="50%" />
      </div>
      <div class="text-center">
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{{ title }}</h5>
      </div>
    </div>
  </a>
  -->

  <div class="animate-fade">
    <a>
      <img class="rounded-t-lg" :src="image" :alt="title" />
    </a>
    <div class="p-5">
      <h2 class="text-xxl font-semibold text-gray-900 dark:text-white">
        {{ title }}
      </h2>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {{ short_description }}
      </p>
      <!--
      <a :data-modal-target="'modal-prin-prod-' + index" :data-modal-toggle="'modal-prin-prod-' + index" class="text-center inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Ver más
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </a>
      -->
    </div>
  </div>

  <!-- Main modal -->
  <div :id="'modal-prin-prod-' + index" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full animate-fade-down animate-duration-700">
    <div class="relative p-4 w-full max-w-2xl max-h-full">
      <!-- Modal content -->
      <div class="relatived bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            {{ title }}
          </h3>
          <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" :data-modal-hide="'modal-prin-prod-' + index">
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-4 md:p-5 space-y-4">
          <div class="flex justify-center items-center">
            <img class="rounded-t-lg" :src="image" :alt="title" height="50%" />
          </div>
          <p v-if="description != ''" class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            {{ description }}
          </p>
          <div v-if="points.length > 0">
            <p v-for="point in points" class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              - {{ point }}
            </p>
          </div>
        </div>
        <!-- Modal footer
        <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
          <button :data-modal-hide="'modal-prin-prod-' + index" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
          <button :data-modal-hide="'modal-prin-prod-' + index" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Decline</button>
        </div>
        -->
      </div>
    </div>
  </div>
</template>
