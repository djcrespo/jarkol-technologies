<template>
    <section class="pt-10 pb-10 md:pt-24">
        <AtomsContainer>
            <div class="grid md:grid-cols-2 gap-8 xl:gap-14 relative">
                <div class="flex md:h-full">
                    <div
                        class="lg:w-full md:w-auto md:h-auto rounded-3xl bg-white dark:bg-body shadow-lg shadow-box-shadow border border-box-border">
                        <img src="/jarkol/images/img4.jpg" alt="About us" width="500"
                            class="w-full h-full object-cover rounded-2xl">
                    </div>
                </div>
                <div class="md:py-2 lg:py-4 relative">
                    <div class="absolute right-0 top-0 h-full w-full flex justify-end">
                        <span class="flex opacity-20">
                            <span class="w-16 h-32 rounded-l-full flex bg-primary blur-2xl"></span>
                            <span class="w-16 h-32 rounded-r-full flex bg-[#f88fc2] blur-2xl mt-14"></span>
                        </span>
                    </div>
                    <div class="relative">
                        <AtomsTitle :texte="t('home.extra.title')" />
                        <p class="text-gray-600 text-justify dark:text-gray-300 pt-8">
                          {{ t('home.extra.subtext_1') }}
                        </p>
                      <p class="text-gray-600 text-justify dark:text-gray-300 pt-8">
                        {{ t('home.extra.subtext_2') }}
                      </p>
                        <div class="pt-10 flex justify-center">
                            <AtomsLinkBtn href="nosotros" variant="primary">
                              {{ t('home.extra.button') }}
                            </AtomsLinkBtn>
                        </div>
                    </div>
                </div>
            </div>
        </AtomsContainer>
    </section>
</template>

<script setup lang="ts">
import {useI18n} from "vue-i18n";

const { t } = useI18n()
</script>
