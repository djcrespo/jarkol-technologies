<template>
  <div class="bg-[url('public/jarkol/images/img4.jpg')] bg-cover bg-center">
    <div class="bg-[#3B408C] bg-opacity-70">
      <section class="py-40 md:py-30">
        <AtomsContainer>
          <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-10">
            <h3 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">
              {{ t('products.text_2') }}
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
