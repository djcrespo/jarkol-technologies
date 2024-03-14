<template>
  <AtomsContainer>
    <section class="lg:pt-20 lg:pb-20 md:pt-24 md:pb-24">
      <HeroContact />
      <div>
        <GoogleMaps />
      </div>
      <div class="lg:pt-4 md:pt-4 grid lg:grid-cols-2 gap-4">
        <Contact />
        <FormContact />
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