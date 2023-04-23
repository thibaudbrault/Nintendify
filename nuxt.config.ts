// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/image-edge',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/supabase',
    '@pinia/nuxt',
    '@vueuse/nuxt',
  ],
  typescript: {
    strict: true,
  },
  image: {
    domains: ['raw.githubusercontent.com'],
  },
})
