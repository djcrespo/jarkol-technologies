<script setup lang="ts">
  defineProps<{
    image?: string
    title?: string
    description?: string
  }>()
</script>

<template>
  <div class="flex flex-col justify-center">

    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a class="py-6 flex justify-center">
        <img class="rounded-t-lg" style="height: 200px" :src="image" :alt="title" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ title }}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ description }}</p>
      </div>
    </div>

  </div>
</template>
