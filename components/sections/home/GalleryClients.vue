<script setup lang="ts">
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import clients from "public/jarkol/clients/clients.json"
import { ref } from 'vue';

interface Client {
  name: string;
  image: string;
}

const clientsData: Client[] = clients;

const activeIndex = ref<number | null>(null);

const activate = (index: number) => {
  activeIndex.value = index;
};

const deactivate = () => {
  activeIndex.value = null;
};

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
})
</script>

<template>
  <section class="lg:pt-5 lg:pb-20 md:pt-24 md:pb-24">
    <AtomsContainer>
      <div class="group grid grid-cols-2 md:grid-cols-5 gap-10">
        <div
            v-for="(client, index) in clientsData"
            :key="index"
            class="flex flex-col justify-center transition duration-300 ease-in-out transform"
            :class="{'opacity-50': activeIndex !== index}"
            @mouseover="activate(index)"
            @mouseleave="deactivate"
            :style="activeIndex === index ? 'transform: scale(1.2);' : ''"
        >
          <img class="h-auto max-w-full" :src="'/jarkol/clients/new-images/' + client.image" :alt="client.name">
        </div>
      </div>
    </AtomsContainer>
  </section>
</template>
