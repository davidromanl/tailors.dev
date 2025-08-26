// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@storyblok/nuxt', '@nuxt/ui'],

  css: ['~/assets/css/tailwind.css'],

  compatibilityDate: '2024-10-29',
  

  storyblok: {
    accessToken: process.env.STORYBLOK_TOKEN,
    apiOptions: {
      region: "us"
    }
  }
})