<script lang="ts" setup>
import {useI18n} from "vue-i18n";
import { computed } from 'vue'

const navIsOpen = useState('navIsOpen', () => false)


function toggleNav(event: MouseEvent): void {
    event.preventDefault()
    navIsOpen.value = !navIsOpen.value
}

const { t, locale } = useI18n()

const currentLocale = computed(() => locale.value)

const navLinks = computed(() => [
  {
    text: t('header.page_1'),
    href: "/"
  },
  {
    text: t('header.page_2'),
    href: "/nosotros"
  },
  {
    text: t('header.page_3'),
    href: "/productos"
  },
  {
    text: t('header.page_4'),
    href: "/servicios"
  },
  {
    text: t('header.page_5'),
    href: "/clientes"
  },
  {
    text: t('header.page_6'),
    href: "/contacto"
  }
])


const changeLocale = (newLocale: string) => {
  locale.value = newLocale
}
</script>

<template>
    <header class="absolute inset-x-0 top-0 py-3 z-50 bg-white">
        <AtomsContainer class-name="relative">
            <nav class="flex items-center justify-between w-full relative">
                <!-- app logo -->
                <div class="inline-flex relative bg-inherit">
                    <NuxtLink to="/" class=" flex items-center gap-2">
                        <!--
                        <span class="flex">
                            <span class="w-3 h-6 rounded-l-full flex bg-primary"></span>
                            <span class="w-3 h-6 rounded-r-full flex bg-[#f88fc2] mt-2"></span>
                        </span>
                        <span class="text-lg text-gray-700 dark:text-white">Jarkol Technologies</span>
                        -->
                      <img class="h-11 w-auto" src="/jarkol/logo/jarkol.png" alt="Jarkol Technologies">
                    </NuxtLink>
                </div>
                <div
                    class="absolute top-full px-5 sm:px-8 md:px-12 lg:px-0
                    lg:pt-0 lg:top-0 invisible opacity-40 lg:opacity-100 bg-body rounded-xl border border-box-border shadow-lg shadow-box-shadow
                    lg:border-none lg:shadow-none lg:rounded-none
                    lg:bg-transparent w-full lg:w-max py-6 lg:py-0 lg:visible lg:relative flex
                    transition-all duration-300 ease-linear origin-top translate-y-6 lg:translate-y-0"
                    :class="navIsOpen?'!visible !opacity-100 !translate-y-0':''">
                    <ul class="text-gray-700 dark:text-gray-100 w-full flex lg:items-center gap-y-4 lg:gap-x-8 flex-col lg:flex-row">
                        <AtomsNavLink v-for="navItem in navLinks" :href="navItem.href" :text="navItem.text" />
                        <li>
                          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                            <NuxtLink to="/cotizar" >
                              {{ t('header.page_7') }}
                            </NuxtLink>
                          </button>
                        </li>
                    </ul>
                </div>

                <div class="flex items-center bg-inherit gap-1 lg:gap-3 min-w-max">

                  <div class="lg:flex lg:items-center gap-4">
                    <button
                        v-if="currentLocale === 'es'"
                        @click="changeLocale('en')"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    >
                      <img src="/jarkol/logo/USA.svg" alt="English" class="w-6 h-6" />
                    </button>

                    <button
                        v-else
                        @click="changeLocale('es')"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    >
                      <img src="/jarkol/logo/mexico.png" alt="English" class="w-6 h-6" />
                    </button>
                  </div>

                    <div class="flex lg:hidden border-l border-box-border pl-2">
                        <button @click="toggleNav" class="outline-none w-7 h-auto flex flex-col relative">
                            <span
                                class="w-6 h-0.5 rounded-full bg-gray-500 dark:bg-gray-200 transition-all duration-300 ease-linear"
                                :class="navIsOpen ? 'translate-y-1.5 rotate-[40deg] scale-x-100 ' : ' scale-x-50 origin-left'"></span>
                            <span
                                class="w-6 origin-center  mt-1 h-0.5 rounded-full bg-gray-500 dark:bg-gray-200 transition-all duration-300 ease-linear"
                                :class="navIsOpen ? 'scale-x-0 opacity-0' : ''"></span>
                            <span
                                class="w-6 mt-1 h-0.5 rounded-full bg-gray-500 dark:bg-gray-200 transition-all duration-300 ease-linear"
                                :class="navIsOpen ? '-translate-y-1.5 -rotate-[40deg] scale-x-100 ' : ' scale-x-75 origin-left'"></span>
                        </button>
                    </div>
                </div>
            </nav>
        </AtomsContainer>
    </header>
</template>
