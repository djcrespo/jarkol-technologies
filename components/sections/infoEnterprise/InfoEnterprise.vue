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
      <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{{ t('nosotros.principal_title') }}</h1>
    </div>
    <AtomsContainer>
      <div class="grid lg:grid-cols-2 md:grid-cols-1 gap-5 flex justify-center">
        <CardsInfoCard
            :index="0"
            :title="t('nosotros.object_1.title')"
            :short-description="t('nosotros.object_1.short_description')"
            :description="t('nosotros.object_1.description')"
            :points="[]"
        />
        <CardsInfoCard
            :index="1"
            :title="t('nosotros.object_2.title')"
            :short-description="t('nosotros.object_2.short_description')"
            :description="t('nosotros.object_2.description')"
            :points="[]"
        />
        <CardsInfoCard
            :index="2"
            :title="t('nosotros.object_3.title')"
            :short-description="t('nosotros.object_3.short_description')"
            :description="t('nosotros.object_3.description')"
            :points="[]"
        />
        <CardsInfoCard
            :index="3"
            :title="t('nosotros.object_4.title')"
            :short-description="t('nosotros.object_4.short_description')"
            :description="t('nosotros.object_4.description')"
            :points="[]"
        />
      </div>
    </AtomsContainer>
  </section>
</template>
