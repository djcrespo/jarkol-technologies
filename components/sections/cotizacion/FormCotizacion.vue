<script setup lang="ts">
  import services_es from "public/jarkol/services/services_cotizacion_es.json"
  import services_en from "public/jarkol/services/services_cotizacion_en.json"
  import products_en from "public/jarkol/products/products_cotizacion_en.json"
  import products_es from "public/jarkol/products/products_cotizacion_es.json"
  import {computed, onMounted, watch} from 'vue'
  import { initFlowbite } from 'flowbite'
  import { useNuxtApp } from '#app'
  import { useRouter } from 'vue-router'
  import {useI18n} from "vue-i18n";
  import accessories_es from "public/jarkol/products/accessories_es.json";
  import accessories_en from "public/jarkol/products/accessories_en.json";

  const { t, locale } = useI18n()
  const currentLocale = computed(() => locale.value)

  // Interfaces
  interface Service {
    servicio: string,
    tipoDeServicio: string,
    preguntasDeReferencia: Array<string>
  }

  interface Service2 {
    servicio: string,
    tipoDeServicio: string,
    preguntasDeReferencia: Array<object>
  }

  interface Product {
    producto: string,
    tipoDeProducto: string,
    condicionesDeAdquisicion: string,
    preguntasDeReferencia: Array<string>
  }

  interface Product2 {
    producto: string,
    tipo_producto: string,
    condiciones_adquisicion: string,
    preguntas_referencia: Array<object>
  }

  interface Cotizar {
    type: string,
    client: {
      first_name: string,
      last_name: string
    },
    contact: {
      phone: string,
      mail: string,
      subject: string
    },
    address: {
      street: string,
      postal_code: string
    },
    info: {
      date: any
    }
  }

  // Data
  const nuxtApp = useNuxtApp()
  const router = useRouter()
  const servicesData: Service2[] = currentLocale === 'es' ? services_es : services_en;
  const products2Data: Product2[] = currentLocale === 'es' ? products_es : products_en;

  const option = ref(false);
  const selectService = ref<Service | null>(null);
  const selectProduct = ref<Product2 | null>(null);
  let selectProduct2 = ref<any | null>(null);
  let selectService2 = ref<any | null>(null);

  let formProduct: any = {}
  let formService: any = {}

  let form: Cotizar = {
    type: option ? 'Servicio' : 'Producto',
    client: {
      first_name: '',
      last_name: ''
    },
    contact: {
      phone: '',
      mail: '',
      subject: 'nueva cotización'
    },
    address: {
      street: '',
      postal_code: ''
    },
    info: {
      date: new Date()
    }
  }

  // Methods

  const reloadPage = () => {
    router.push({ path: router.currentRoute.value.fullPath }).then(() => {
      window.location.reload()
    })
  }

  const viewValues = async () => {
    // console.log(form);
    console.log({
      person: form.client,
      contact: form.contact,
      address: {
        street: form.address.street,
        postal_code: String(form.address.postal_code)
      },
      objectCotizacion: JSON.stringify(
          {
            type: form.type,
            object: form.type ? formProduct : formService,
            selectOption: form.type ? selectProduct2 : selectService2
          }
      )
    })
   try {
     await nuxtApp.$axios.post('enviar-cotizacion', {
       person: form.client,
       contact: form.contact,
       address: form.address,
       objectCotizacion: JSON.stringify(
           {
             type: form.type,
             object: form.type ? formProduct : formService,
             selectOption: form.type ? selectProduct2.value : selectService2.value
           }
       )
     })
     selectProduct2 = ref<any | null>(null);
     selectService2 = ref<any | null>(null);
     formProduct = {}
     formService = {}
     form = {
       type: option ? 'Servicio' : 'Producto',
       client: {
         first_name: '',
         last_name: ''
       },
       contact: {
         phone: '',
         mail: '',
         subject: 'nueva cotización'
       },
       address: {
         street: '',
         postal_code: ''
       },
       info: {
         date: new Date()
       }
     }
     reloadPage()
   } catch (error) {
     console.log(error)
   }
  }

  const sendCotizacion = async () => {
    try {

    } catch (error) {
      console.log(error)
    }
  }

  // watch
  watch(option, (newVal, oldVal) => {
    if (newVal === true) {
      selectProduct2 = ref<any | null>(null)
    } else {
      selectService2 = ref<any | null>(null)
    }
  })

  onMounted(() => {
    initFlowbite();
  })
</script>

<template>
  <section>
    <form class="mx-20 my-10">

      <div class="mx-10">
        <!-- Seleccionar producto o servicio -->
        <div class="mx-2 mb-5">
          <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ t('cotizar.select_1') }} {{ option ? t('cotizar.options.value_1') : t('cotizar.options.value_2') }}</label>
          <select v-if="option" v-model="selectService2" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>{{ t('cotizar.select_2') }}</option>
            <option v-for="service in servicesData" :value="service" :key="service.servicio">{{ service.tipoDeServicio }}</option>
          </select>
          <select v-else id="countries" v-model="selectProduct2" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>{{ t('cotizar.select_2') }}</option>
            <option v-for="product in products2Data" :value="product" :key="product.producto">{{ product.tipo_producto }}</option>
          </select>
        </div>

        <!-- Filtrar (switch para mostrar productos o servicios) -->
        <div class="mx-2 mb-5">
          <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ t('cotizar.text_filter') }}:</label>
          <label class="inline-flex items-center mb-5 cursor-pointer">
            <input v-model="option" type="checkbox" value="" class="sr-only peer">
            <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{{ option ? t('cotizar.options.value_1') : t('cotizar.options.value_2') }}</span>
          </label>
        </div>

        <!-- preguntas de los productos -->
        <div class="mx-2" v-if="selectProduct2">
          <div v-for="pregunta in selectProduct2.preguntas_referencia">
            <div v-if="pregunta.valores.length > 0" class="mb-5">
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ pregunta.pregunta }}</label>
              <select v-model="formProduct[pregunta.pregunta]" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>{{ t('cotizar.select_2') }}</option>
                <option v-for="valor in pregunta.valores" :value="valor" :key="valor">{{ valor + (pregunta.unidad != '' ? ' ' + pregunta.unidad : '') }}</option>
              </select>
            </div>
            <div v-else class="mb-5">
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ pregunta.pregunta }}</label>
              <input v-model="formProduct[pregunta.pregunta]" type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
          </div>
        </div>

        <!-- preguntas de los servicios -->
        <div class="mx-2" v-if="selectService2">
          <div v-for="pregunta in selectService2.preguntasDeReferencia">
            <div v-if="pregunta.valores.length > 0" class="mb-5">
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ pregunta.pregunta }}</label>
              <select v-model="formService[pregunta.pregunta]" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>{{ t('cotizar.select_2') }}</option>
                <option v-for="valor in pregunta.valores" :value="valor" :key="valor">{{ valor }}</option>
              </select>
            </div>
            <div v-else class="mb-5">
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ pregunta.pregunta }}</label>
              <input v-model="formService[pregunta.pregunta]" type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2">
        <div class="mx-10">
          <!-- Datos generales del cliente -->
          <label class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">{{ t('cotizar.form.title_1') }}</label>

          <div class="mb-5 grid grid-cols-2">
            <div class="mx-2">
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ t('cotizar.form.person.first_name') }}</label>
              <input v-model="form.client.first_name" type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div class="mx-2">
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ t('cotizar.form.person.last_name') }}</label>
              <input v-model="form.client.last_name" type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
          </div>
          <div class="mx-2 mb-5">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ t('cotizar.form.person.mail') }}</label>
            <input v-model="form.contact.mail" type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <div class="mx-2 mb-5">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ t('cotizar.form.person.phone') }}</label>
            <input v-model="form.contact.phone" type="phone" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
        </div>
        <div class="mx-10">
          <!-- Dirección del cliente -->
          <label class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">{{ t('cotizar.form.title_2') }}</label>
          <div class="mb-5 grid grid-cols-2">
            <div class="mx-2">
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ t('cotizar.form.address.address') }}</label>
              <input v-model="form.address.street" type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div class="mx-2">
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ t('cotizar.form.address.cp') }}</label>
              <input v-model="form.address.postal_code" type="number" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
          </div>
        </div>
      </div>

      <div class="w-full text-center">
        <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @click.prevent="viewValues">
          {{ t('cotizar.form.button') }}
        </button>
      </div>
    </form>
  </section>
</template>
