// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/css/reset.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/css/_colors.scss" as *;',
        },
      },
    },
  },
  modules: ['@nuxt/image-edge'],
  typescript: {
    strict: true,
  },
  image: {
    domains: ['raw.githubusercontent.com'],
  },
})
