<script setup lang="ts">
useHead({
  title: 'Servicios | Jarkol Technologies',
  meta: [
    { name: 'description', content: 'Transformamos desafíos geotérmicos y geofísicos en oportunidades, guiándolo hacia el futuro de la exploración energética.' },
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/jarkol/logo/jarkol.png' }
  ],
})

import services from "public/jarkol/services/services.json"
import ServiceCard from "~/components/sections/servicesCompany/ServiceCard.vue"

interface Service {
  name: string,
  specific_services: Array<string>
}

const servicesData: Service[] = services
</script>

<template>
  <section class="lg:pt-20 lg:pb-20 md:pt-24 md:pb-24">
    <AtomsContainer>
      <section>
        <SectionsServicesCompanyHero />
        <div class="grid lg:grid-cols-2 md:grid-cols-1 gap-4 animate-fade animate-delay-700">
          <div v-for="service in servicesData">
            <ServiceCard :name="service.name" :specific_services="service.specific_services"/>
          </div>
        </div>
      </section>
    </AtomsContainer>
  </section>
</template>
