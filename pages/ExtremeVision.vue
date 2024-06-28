<script setup lang="ts">
useHead({
  title: 'ExtremeVISION | Jarkol Technologies',
  meta: [
    { name: 'description', content: 'Transformamos desafíos geotérmicos y geofísicos en oportunidades, guiándolo hacia el futuro de la exploración energética.' },
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/jarkol/logo/jarkol.png' }
  ],
})
</script>

<template>
  <div>
    <SectionsExtremeHeroExtreme class="animate-fade-up"  />
    <section class="lg:py-10 lg:pb-20 md:pt-24 md:pb-24">
      <AtomsContainer>
        <section>
          <div class="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-4">
            <SectionsExtremeDescriptionOne class="animate-fade-up"  />
            <SectionsExtremeDescriptionTwo class="animate-fade-up"  />
          </div>
        </section>
      </AtomsContainer>
      <SectionsExtremeAdvantages class="animate-fade-up"  />
    </section>
  </div>
</template>
