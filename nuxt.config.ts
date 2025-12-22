// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@storyblok/nuxt', '@nuxt/ui'],

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2025-07-15',
  

  storyblok: {
    accessToken: process.env.STORYBLOK_TOKEN,
    apiOptions: {
      region: "us"
    }
  }
})