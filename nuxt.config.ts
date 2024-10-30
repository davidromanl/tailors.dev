// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss','@storyblok/nuxt'],
  runtimeConfig: {
    public: {
      storyblokToken: process.env.STORYBLOK_TOKEN
    }
  },
  storyblok: {
    accessToken: process.env.STORYBLOK_TOKEN,
    apiOptions: {
      region: "us"
    }
  }
})
