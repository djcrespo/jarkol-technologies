<template>
  <section>
    <!-- Incluir el componente Popup -->
    <pop-up :showPopup="showPopup" @close="showPopup = false" />
    <form class="mx-20 my-10">
      <div class="lg:mx-10 md:mx-2">
        <!-- Seleccionar producto o servicio -->
        <div class="mx-2 mb-5">
          <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ t('cotizar.select_1') }} {{ option ? t('cotizar.options.value_1') : t('cotizar.options.value_2') }}</label>
          <select v-if="option" v-model="selectService2" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>{{ t('cotizar.select_2') }}</option>
            <option v-for="service in servicesData" :value="service" :key="service.servicio">{{ service.tipoDeServicio }}</option>
          </select>
          <select v-else id="countries" v-model="selectProduct2" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>{{ t('cotizar.select_2') }}</option>
            <option v-for="product in productsData" :value="product" :key="product.producto">{{ product.tipo_producto }}</option>
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

      <div class="grid lg:grid-cols-2 md:grid-cols-1">
        <div class="lg:mx-10 md:mx-2">
          <!-- Datos generales del cliente -->
          <label class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">{{ t('cotizar.form.title_1') }}</label>

          <div class="mb-5 grid lg:grid-cols-2 md:grid-cols-1">
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
        <div class="lg:mx-10 md:mx-2">
          <!-- Dirección del cliente -->
          <label class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">{{ t('cotizar.form.title_2') }}</label>
          <div class="mb-5 grid lg:grid-cols-2 md:grid-cols-1">
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
          <div class="flex items-center">
            <svg v-if="isLoading" class="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" class="opacity-25"></circle>
              <path d="M4 12a8 8 0 018-8" stroke="currentColor" stroke-width="4" class="opacity-75"></path>
            </svg>
            <p v-else>
              {{ t('cotizar.form.button') }}
            </p>
          </div>
        </button>
      </div>
    </form>
  </section>
</template>

<script>
import { useI18n } from 'vue-i18n';
import { initFlowbite } from 'flowbite'
import services_es from "public/jarkol/services/services_cotizacion_es.json"
import services_en from "public/jarkol/services/services_cotizacion_en.json"
import products_en from "public/jarkol/products/products_cotizacion_en.json"
import products_es from "public/jarkol/products/products_cotizacion_es.json"
import popUp from "~/components/popups/popUp.vue";

export default {
  name: 'formCotizacion',
  components: {popUp},
  created() {
    if (process.client) {
      initFlowbite();
    }
    const { t, locale } = useI18n();
    this.t = t;
    this.servicesData = locale.value === 'es' ? services_es : services_en
    this.productsData = locale.value === 'es' ? products_es : products_en
  },
  mounted() {
    if (process.client) {
      initFlowbite();
    }
    const { t, locale } = useI18n();
    this.t = t;
    this.servicesData = locale.value === 'es' ? services_es : services_en
    this.productsData = locale.value === 'es' ? products_es : products_en
    this.$watch(() => locale.value, (newLocale) => {
      if (newLocale === 'es') {
        this.servicesData = services_es
        this.productsData = products_es
      } else {
        this.servicesData = services_en
        this.productsData = products_en
      }
    })
  },
  data () {
     return {
       showPopup: false,
       isLoading: false,
       option: false,
       servicesData: [],
       productsData: [],
       selectService2: {},
       formService: {},
       selectProduct2: {},
       formProduct: {},
       form: {
         type: 'Producto',
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
     }
  },
  watch: {
    option(newVal, oldVal){
      if (newVal) {
        this.formService = {}
        this.formProduct = {}
        this.selectService2 = {}
        this.selectProduct2 = {}
      } else {
        this.formService = {}
        this.formProduct = {}
        this.selectService2 = {}
        this.selectProduct2 = {}
      }
    }
  },
  methods: {
    async viewValues() {
      this.isLoading = true

      // Opcion seleccionada
      const option_select = this.option ? this.selectService2 : this.selectProduct2

      // Formuario del objecto seleccionado
      const form_select = this.option ? this.formService : this.formProduct

      // Información por enviar
      const object_send = {
        person: JSON.parse(JSON.stringify(this.form.client)),
        contact: JSON.parse(JSON.stringify(this.form.contact)),
        address: JSON.parse(JSON.stringify(this.form.address)),
        objectCotizacion: JSON.stringify(
            {
              type: this.form.type,
              object: JSON.stringify(form_select),
              selectOption: JSON.stringify(option_select)
            }
        )
      }

      console.log(object_send)

      try {
        await this.$axios.post('enviar-cotizacion', object_send)

        this.formService = {}
        this.formProduct = {}
        this.selectService2 = {}
        this.selectProduct2 = {}

        this.option = false

        this.form = {
          type: 'Producto',
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
        this.isLoading = false
        this.showPopup = true
        setTimeout(() => {
          this.showPopup = false
        }, 2000);
      } catch (error) {
        this.isLoading = false
        console.log(error)
      }
    }
  }
}
</script>
