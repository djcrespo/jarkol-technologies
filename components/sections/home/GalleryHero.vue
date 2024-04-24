<template>
  <div
      id="carouselExampleCrossfade"
      class="relative"
      data-twe-carousel-init
      data-twe-ride="carousel">

    <!--Carousel items-->
    <div
        class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
      <!--First item-->
      <div
          class="relative float-left -mr-[100%] w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-fade
          data-twe-carousel-item
          data-twe-carousel-active>
        <img
            src="/jarkol/bg_v2/buenas/img1.jpg"
            class="opacity-70 block w-full"
            alt="Jarkol Technologies" />
      </div>
      <!--Second item-->
      <div
          class="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-fade
          data-twe-carousel-item>
        <img
            src="/jarkol/bg_v2/buenas/img2.jpg"
            class="opacity-70 block w-full"
            alt="Jarkol Technologies" />
      </div>
    </div>

    <!--Carousel controls - prev item
    <button
        class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-twe-target="#carouselExampleCrossfade"
        data-twe-slide="prev">
    <span class="inline-block h-8 w-8">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-6 w-6">
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </span>
      <span
          class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Previous</span
      >
    </button>
    -->
    <!--Carousel controls - next item
    <button
        class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-twe-target="#carouselExampleCrossfade"
        data-twe-slide="next">
    <span class="inline-block h-8 w-8">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-6 w-6">
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </span>
      <span
          class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Next</span
      >
    </button>
    -->
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { Carousel } from "tw-elements";

onMounted(async () => {
  const { Carousel, initTWE } = await import("tw-elements");
  initTWE({ Carousel });
});
</script>
COPY
