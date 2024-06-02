<template>
  <section class="pt-20 pb-2.5 md:pt-24 md:pb-10 animate-fade-up">
    <AtomsContainer>

      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-10">
          <h3 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            {{ t('contact.title_1') }}
          </h3>
        </div>
      </section>

    </AtomsContainer>
  </section>
</template>

<script setup lang="ts">
import {useI18n} from "vue-i18n";

const { t } = useI18n()
</script>
