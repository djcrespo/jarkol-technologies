<script setup lang="ts">
useHead({
  title: 'Nosotros | Jarkol Technologies',
  meta: [
    { name: 'description', content: 'Transformamos desafíos geotérmicos y geofísicos en oportunidades, guiándolo hacia el futuro de la exploración energética.' },
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/jarkol/logo/jarkol.png' }
  ],
})
</script>

<template>
  <section class="lg:pt-5 lg:pb-20 md:pt-12 md:pb-24">
    <SectionsInfoEnterpriseHeroAbout class="animate-fade-up animate-delay-500" />
    <AtomsContainer>
      <SectionsInfoEnterpriseHeroMisionAndVision class="animate-fade-up animate-delay-600" />
      <SectionsInfoEnterprise class="animate-fade-up animate-delay-700" />
      <SectionsInfoEnterpriseHeroCommunities class="animate-fade-up animate-delay-800" />
      <!--<SectionsInfoEnterpriseHeroMisionAndVision class="animate-fade-up animate-delay-500" />-->
    </AtomsContainer>
  </section>
</template>
