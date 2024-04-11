<script setup lang="ts">
defineProps<{
  name?: string
  specific_services?: Array<string>
}>()
</script>

<template>
  <div class="flex flex-col justify-between p-4 leading-normal">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ name }}</h5>
    <p v-for="service in specific_services" class="mb-3 font-normal text-gray-700 dark:text-gray-400">
      - {{ service }}
    </p>
  </div>
</template>
