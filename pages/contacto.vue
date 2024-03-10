<template>
  <AtomsContainer>
    <section class="lg:pt-20 lg:pb-20 md:pt-24 md:pb-24">
      <HeroContact />
      <div class="grid lg:grid-cols-2 gap-4">
        <GoogleMaps />
        <FormContact />
      </div>
    </section>
    <section class="lg:pt-20 lg:pb-20 md:pt-24 md:pb-24">
      <div class="lg:max-w-full">
        <Contact />
      </div>
    </section>
  </AtomsContainer>
</template>
<script setup lang="ts">
import GoogleMaps from "~/components/sections/contact/GoogleMaps.vue";
import Contact from "~/components/sections/contact/Contact.vue";
import HeroContact from "~/components/sections/contact/HeroContact.vue";
import FormContact from "~/components/sections/contact/FormContact.vue";

useHead({
  title: 'Contacto | Jarkol Technologies',
  meta: [
    { name: 'description', content: 'Transformamos desafíos geotérmicos y geofísicos en oportunidades, guiándolo hacia el futuro de la exploración energética.' },
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/jarkol/logo/jarkol.png' }
  ],
})
</script>