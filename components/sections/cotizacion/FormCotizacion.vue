<script setup lang="ts">
  import services from "public/jarkol/services/services_cotizacion.json"
  import products from "public/jarkol/products/prodcuts_cotizacion.json"
  import products2 from "public/jarkol/products/products_cotizacion_2.json"
  import { onMounted, watch } from 'vue'
  import { initFlowbite } from 'flowbite'

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
      email: string
    },
    address: {
      street: string,
      extern_number: string,
      internal_number: string,
      extra_streets: string,
      postal_code: string
    },
    info: {
      date: any
    }
  }

  // Data
  const servicesData: Service2[] = services;
  const products2Data: Product2[] = products2;

  const option = ref(false);
  const selectService = ref<Service | null>(null);
  const selectProduct = ref<Product2 | null>(null);
  let selectProduct2 = ref<any | null>(null);
  let selectService2 = ref<any | null>(null);

  const formProduct: any = {}
  const formService: any = {}

  const form: Cotizar = {
    type: option ? 'Servicio' : 'Producto',
    client: {
      first_name: '',
      last_name: ''
    },
    contact: {
      phone: '',
      email: ''
    },
    address: {
      street: '',
      extern_number: '',
      internal_number: '',
      extra_streets: '',
      postal_code: ''
    },
    info: {
      date: new Date()
    }
  }

  // Methods

  const viewValues = () => {
    console.log(formProduct);
  }

  const viewValue = () => {
    console.log(selectService)
    console.log(selectProduct)
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
          <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Selecciona un {{ option ? 'servicio' : 'producto' }}</label>
          <select v-if="option" v-model="selectService2" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Selecciona una opción</option>
            <option v-for="service in servicesData" :value="service" :key="service.servicio">{{ service.servicio }}{{ service.tipoDeServicio ? (' - ' + service.tipoDeServicio) : '' }}</option>
          </select>
          <select v-else id="countries" v-model="selectProduct2" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Selecciona una opción</option>
            <option v-for="product in products2Data" :value="product" :key="product.producto">{{ product.producto }}{{ product.tipo_producto ? (' - ' + product.tipo_producto) : '' }}</option>
          </select>
        </div>

        <!-- Filtrar (switch para mostrar productos o servicios) -->
        <div class="mx-2 mb-5">
          <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Filtrar por:</label>
          <label class="inline-flex items-center mb-5 cursor-pointer">
            <input v-model="option" type="checkbox" value="" class="sr-only peer">
            <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{{ option ? 'Servicio' : 'Producto' }}</span>
          </label>
        </div>

        <!-- preguntas de los productos -->
        <div class="mx-2" v-if="selectProduct2">
          <div v-for="pregunta in selectProduct2.preguntas_referencia">
            <div v-if="pregunta.valores.length > 0" class="mb-5">
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ pregunta.pregunta }}</label>
              <select v-model="formProduct[pregunta.pregunta]" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Selecciona una opción</option>
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
                <option selected>Selecciona una opción</option>
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
          <label class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Datos de contacto</label>

          <div class="mb-5 grid grid-cols-2">
            <div class="mx-2">
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre(s)</label>
              <input v-model="form.client.first_name" type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div class="mx-2">
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellido(s)</label>
              <input v-model="form.client.last_name" type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
          </div>
          <div class="mx-2 mb-5">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo electrónico</label>
            <input v-model="form.contact.email" type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <div class="mx-2 mb-5">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Teléfono</label>
            <input v-model="form.contact.phone" type="phone" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
        </div>
        <div class="mx-10">
          <!-- Dirección del cliente -->
          <label class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Dirección</label>

          <div class="mx-2 mb-5">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Calle</label>
            <input v-model="form.address.street" type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <div class="mb-5 grid grid-cols-2">
            <div class="mx-2">
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Número exterior</label>
              <input v-model="form.address.extern_number" type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div class="mx-2">
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Número interior (opcional)</label>
              <input v-model="form.address.internal_number" type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
          </div>
          <div class="mb-5 grid grid-cols-2">
            <div class="mx-2">
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cruzamientos</label>
              <input v-model="form.address.extra_streets" type="text" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div class="mx-2">
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Código postal</label>
              <input v-model="form.address.postal_code" type="number" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
          </div>
        </div>
      </div>

      <div class="w-full text-center">
        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @click.prevent="viewValues">Enviar</button>
      </div>
    </form>
  </section>
</template>
