// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss','@storyblok/nuxt'],
  storyblok: {
    accessToken: process.env.STORYBLOK_API_KEY,
    apiOptions: {
      region: "us"
    }
  }
})
