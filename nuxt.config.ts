// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/image-edge',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/supabase',
  ],
  typescript: {
    strict: true,
  },
  image: {
    domains: ['raw.githubusercontent.com'],
  },
})
