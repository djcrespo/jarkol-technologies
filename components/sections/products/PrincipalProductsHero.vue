<template>
  <div class="pt-30 md:pt-30 bg-[url('public/jarkol/bg_v2/buenas2/3.jpg')] bg-cover bg-center">
    <div class="bg-[#3B408C] bg-opacity-70">
      <section class="pt-30 md:pt-30" style="padding-top: 10rem; padding-bottom: 5rem;">
        <AtomsContainer>
          <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-10">
            <h3 class="mb-4 text-2xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">
              {{ t('products.title') }}
            </h3>
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
