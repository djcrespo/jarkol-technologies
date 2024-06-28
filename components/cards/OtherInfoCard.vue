<script setup lang="ts">
import { defineProps, ref, watch, onMounted } from 'vue'

const { shortDescription, index } = defineProps<{
  image: string,
  shortDescription: string,
  index: number
}>()
</script>

<template>
  <a
     class="block max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-white dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-white animate-fade-up animate-delay-700">
    <div class="transition duration-300 ease-in-out hover:scale-110">
      <div class="text-center">
        <p>
          {{ shortDescription }}
        </p>
      </div>
    </div>
  </a>
</template>
