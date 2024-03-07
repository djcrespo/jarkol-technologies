<script setup lang="ts">
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import ClientCard from "~/components/cards/ClientCard.vue";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
})
</script>

<template>
  <section class="pt-20 pb-20 md:pt-24 md:pb-24">
    <AtomsContainer>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="flex flex-col justify-center">
          <img class="h-auto max-w-full rounded-lg" src="/jarkol/clients/1.png" alt="">
        </div>
        <div class="flex flex-col justify-center">
          <img class="h-auto max-w-full rounded-lg" src="/jarkol/clients/2.png" alt="">
        </div>
        <div class="flex flex-col justify-center">
          <img class="h-auto max-w-full rounded-lg" src="/jarkol/clients/3.png" alt="">
        </div>
        <div class="flex flex-col justify-center">
          <img class="h-auto max-w-full rounded-lg" src="/jarkol/clients/4.png" alt="">
        </div>
        <div class="flex flex-col justify-center">
          <img class="h-auto max-w-full rounded-lg" src="/jarkol/clients/5.png" alt="">
        </div>
        <div class="flex flex-col justify-center">
          <img class="h-auto max-w-full rounded-lg" src="/jarkol/clients/6.png" alt="">
        </div>
        <div class="flex flex-col justify-center">
          <img class="h-auto max-w-full rounded-lg" src="/jarkol/clients/7.png" alt="">
        </div>
        <div class="flex flex-col justify-center">
          <img class="h-auto max-w-full rounded-lg" src="/jarkol/clients/8.png" alt="">
        </div>
        <div class="flex flex-col justify-center">
          <img class="h-auto max-w-full rounded-lg" src="/jarkol/clients/9.png" alt="">
        </div>
        <div class="flex flex-col justify-center">
          <img class="h-auto max-w-full rounded-lg" src="/jarkol/clients/10.webp" alt="">
        </div>
      </div>
    </AtomsContainer>
  </section>
</template>
