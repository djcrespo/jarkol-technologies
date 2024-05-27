// plugins/axios.ts
import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import axios from 'axios'

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig()

    const api = axios.create({
        baseURL: config.public.apiBaseUrl, // Utiliza la variable de entorno aquí
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            // No puedes añadir 'Access-Control-Allow-Origin' aquí, eso debe ser manejado por el servidor
        }
    })

    // console.log(config.public.apiBaseUrl)

    // Puedes añadir interceptores aquí si es necesario

    nuxtApp.provide('axios', api)
})

