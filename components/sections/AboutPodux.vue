<template>
    <section class="pt-20 md:pt-24">
        <AtomsContainer>
            <div class="grid md:grid-cols-2 gap-8 xl:gap-14 relative">
                <div class="flex md:h-full ">
                    <div
                        class="w-full md:h-full rounded-3xl bg-white dark:bg-body shadow-lg shadow-box-shadow border border-box-border">
                        <img src="/jarkol/images/img4.jpg" alt="Illustratuin about" width="500"
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
                        <AtomsTitle texte="About us" />
                        <p class="text-gray-600 dark:text-gray-300 pt-8">
                          From tackling personal decisions to reaching important milestones, our job is to guide you on the path of success. As professional Engineering Consultants, we guarantee great results.
                        </p>
                      <p class="text-gray-600 dark:text-gray-300 pt-8">
                        We are a service company for the Energy and Extraction Industry, with direct experience in Oil and Gas, Mining and Geothermal, particularly in drilling operations, geophysical logging with both wireline and while drilling tools and production parameters monitoring, focused on the introduction of new, better and more accesible technologies in the Latin American market.
                      </p>
                        <!--
                        <div class="grid grid-cols-1 gap-4 max-w-lg pt-7">
                            <div
                                class="text-center rounded-xl bg-box-bg shadow-lg shadow-box-shadow border border-box-border p-3">
                                <h3 class="text-gray-800 dark:text-white font-bold text-xl sm:text-2xl lg:text-3xl">Misión
                                </h3>
                                <p class="text-sm sm:text-base text-gray-600 dark:text-gray-300">Provide, import and develop technology for the oil, geothermal and mining industry in the Mexican market in order to promote and boost competitiveness.</p>
                            </div>
                            <div
                                class="text-center rounded-xl bg-box-bg shadow-lg shadow-box-shadow border border-box-border p-3">
                                <h3 class="text-gray-800 dark:text-white font-bold text-xl sm:text-2xl lg:text-3xl">Visión</h3>
                                <p class="text-sm sm:text-base text-gray-600 dark:text-gray-300">Convertirnos en una de las empresas mexicanas líderes en impulsar el desarrollo de tecnología y herramientas estratégicas para la industria de la energía en México y América Latina.</p>
                            </div>
                        </div>
                        -->
                        <div class="pt-10 flex justify-center">
                            <AtomsLinkBtn href="#" variant="primary">
                                Contacto
                            </AtomsLinkBtn>
                        </div>
                    </div>
                </div>
            </div>
        </AtomsContainer>
    </section>
</template>