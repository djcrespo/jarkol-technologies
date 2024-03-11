<script setup lang="ts">
useHead({
  title: 'SUPREME300 | Jarkol Technologies',
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
    <AtomsContainer>
      <section>
        <SectionsSupremeHeroSupreme />
        <div class="grid lg:grid-cols-2 md:grid-cols-1 gap-4">
          <SectionsSupremeDescriptionOne />
          <SectionsSupremeDescriptionTwo />
        </div>
      </section>
    </AtomsContainer>
    <SectionsSupremeAdvantages />
  </section>
</template>