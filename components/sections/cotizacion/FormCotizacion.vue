<script setup lang="ts">
  import services from "public/jarkol/services/services_cotizacion.json"
  import products from "public/jarkol/products/prodcuts_cotizacion.json"
  import { onMounted } from 'vue'
  import { initFlowbite } from 'flowbite'

  // Interfaces
  interface Service {
    servicio: string,
    tipoDeServicio: string,
    preguntasDeReferencia: Array<string>
  }

  interface Product {
    producto: string,
    tipoDeProducto: string,
    condicionesDeAdquisicion: string,
    preguntasDeReferencia: Array<string>
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
    info: {
      date: any
    }
  }

  // Data
  const servicesData: Service[] = services
  const productsData: Product[] = products
  const option = ref(false)
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
    info: {
      date: new Date()
    }
  }
  const countries = [
    { value: 'us', name: 'United States' },
    { value: 'ca', name: 'Canada' },
    { value: 'fr', name: 'France' },
  ]

  // Methods
  const viewValues = (): void => {
    console.log(option);
    console.log(form);
  }

  onMounted(() => {
    initFlowbite();
  })
</script>

<template>
  <section>
    <form class="max-w-sm mx-auto">
      <div class="mb-5">
        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Selecciona un {{ option ? 'servicio' : 'producto' }}</label>
        <select v-if="option" id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected>Selecciona una opción</option>
          <option v-for="service in servicesData" :value="service">{{ service.servicio }}{{ service.tipoDeServicio ? (' - ' + service.tipoDeServicio) : '' }}</option>
        </select>
        <select v-else id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected>Selecciona una opción</option>
          <option v-for="product in productsData" :value="product">{{ product.producto }}{{ product.tipoDeProducto ? (' - ' + product.tipoDeProducto) : '' }}</option>
        </select>
      </div>

      <div class="mb-5">
        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Filtrar por:</label>
        <label class="inline-flex items-center mb-5 cursor-pointer">
          <input v-model="option" type="checkbox" value="" class="sr-only peer">
          <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{{ option ? 'Servicio' : 'Producto' }}</span>
        </label>
      </div>

      <div class="mb-5">
        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre(s)</label>
        <input v-model="form.client.first_name" type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </div>
      <div class="mb-5">
        <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellido(s)</label>
        <input v-model="form.client.last_name" type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </div>
      <div class="mb-5">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo electrónico</label>
        <input v-model="form.contact.email" type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </div>
      <div class="mb-5">
        <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Teléfono</label>
        <input v-model="form.contact.phone" type="phone" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </div>
      <!--
      <div class="flex items-start mb-5">
        <div class="flex items-center h-5">
          <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
        </div>
        <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Recibir anuncios y novedades</label>
      </div>
      -->
      <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @click="viewValues">Enviar</button>
    </form>
  </section>
</template>
