<script setup lang="ts">
useHead({
  title: 'DJI Matrice 300 | Jarkol Technologies',
  meta: [
    { name: 'description', content: 'Transformamos desafíos geotérmicos y geofísicos en oportunidades, guiándolo hacia el futuro de la exploración energética.' },
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/jarkol/logo/jarkol.png' }
  ],
})
</script>

<template>
  <section class="lg:pt-20 lg:pb-20 md:pt-24 md:pb-24">
    <SectionsServicesHeroServices class="animate-fade-up" />
    <AtomsContainer>
      <section>
        <div class="pt-5 grid lg:grid-cols-2 md:grid-cols-1 gap-4">
          <SectionsServicesMapping class="animate-fade-up" />
          <SectionsServicesInspection class="animate-fade-up" />
          <SectionsServicesApplications class="animate-fade-up" />
          <SectionsServicesOthersApplications class="animate-fade-up" />
          <SectionsServicesOtherServices class="animate-fade-up" />
          <SectionsServicesInnovation class="animate-fade-up" />
        </div>
      </section>
    </AtomsContainer>
  </section>
</template>
