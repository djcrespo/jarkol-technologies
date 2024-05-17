<script setup lang="ts">
import {onMounted} from "vue";
import {initFlowbite} from "flowbite";

onMounted(() => {
  initFlowbite();
})
</script>

<template>
  <section class="lg:pt-0 lg:pb-5 md:pt-24 md:pb-24">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-10 animate-fade-up animate-delay-300">
      <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Impulsamos su Éxito con Soluciones Geocientíficas de Alto Impacto</h1>
    </div>
    <AtomsContainer>
      <div class="grid lg:grid-cols-2 md:grid-cols-1 gap-5 flex justify-center">
        <CardsInfoCard
            :index="0"
            :title="'Geotermia Integral'"
            :short-description="'Caracterización avanzada de yacimientos y registros geofísicos de pozo en condiciones HPHT.'"
            :description="'Nos especializamos en la caracterización avanzada de yacimientos, optimizando la interpretación sísmica y ofreciendo servicios excepcionales de registros geofísicos de pozo para una evaluación precisa de sus recursos.'"
            :points="[]"
        />
        <CardsInfoCard
            :index="1"
            :title="'Exploración de Vanguardia'"
            :short-description="'Tecnología de punta con IA, algoritmos propios, supercomputación y mapeo LiDAR con Drones.'"
            :description="'Avanzamos la frontera de la exploración geofísica mediante el desarrollo e implementación de algoritmos exclusivos basados en inteligencia artificial, potenciados por supercomputación portátil y tecnologías emergentes como el cómputo cuántico. Nuestros servicios incluyen mapeo LiDAR de alta definición con drones, garantizando una integración eficaz de métodos multidisciplinarios para resultados sin precedentes.'"
            :points="[]"
        />
        <CardsInfoCard
            :index="2"
            :title="'Procesamiento de Datos'"
            :short-description="'Transformamos datos complejos en decisiones estratégicas claras.'"
            :description="'Brindamos soluciones completas desde la exploración geofísica hasta la evaluación de registros de producción. Nuestra meta es convertir datos complejos en información clara y accionable, apoyando la toma de decisiones estratégicas para su proyecto.'"
            :points="[]"
        />
        <CardsInfoCard
            :index="3"
            :title="'Consultoría Avanzada'"
            :short-description="'Orientación experta en operaciones en tierra y costa afuera.'"
            :description="'Sinergia entre un equipo de expertos con trayectorias sólidas en la industria y la academia, ofrecemos consultoría técnica de alto nivel para operaciones en tierra y costa afuera. Nuestro profundo conocimiento en la industria energética se traduce en soluciones efectivas, adaptadas a sus necesidades específicas.'"
            :points="[]"
        />
      </div>
    </AtomsContainer>
  </section>
</template>
