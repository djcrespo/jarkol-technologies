<script setup lang="ts">
import {onMounted} from "vue";
import {initFlowbite} from "flowbite";
import {useI18n} from "vue-i18n";

const { t } = useI18n()

onMounted(() => {
  initFlowbite();
})
</script>

<template>
  <section class="lg:pt-0 lg:pb-5 md:pt-24 md:pb-24">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-10 animate-fade-up animate-delay-300">
      <h1
          class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        {{ t('nosotros.extra_title_2') }}
      </h1>
      <h3
          class="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
        {{ t('nosotros.extra_subtitle_2') }}
      </h3>
    </div>
    <AtomsContainer>
      <div
           class="py-6 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-1 gap-5 flex justify-center">

        <CardsOtherInfoCard
            :index="0"
            :short-description="t('nosotros.points_info_2[0]')"
        />

        <CardsOtherInfoCard
            :index="1"
            :short-description="t('nosotros.points_info_2[1]')"
        />

        <CardsOtherInfoCard
            :index="2"
            :short-description="t('nosotros.points_info_2[2]')"
        />

        <CardsOtherInfoCard
            :index="0"
            :short-description="t('nosotros.points_info_2[3]')"
        />

        <CardsOtherInfoCard
            :index="1"
            :short-description="t('nosotros.points_info_2[4]')"
        />

        <CardsOtherInfoCard
            :index="2"
            :short-description="t('nosotros.points_info_2[5]')"
        />

        <CardsOtherInfoCard
            :index="1"
            :short-description="t('nosotros.points_info_2[6]')"
        />

        <CardsOtherInfoCard
            :index="2"
            :short-description="t('nosotros.points_info_2[7]')"
        />

      </div>
    </AtomsContainer>
  </section>
</template>
