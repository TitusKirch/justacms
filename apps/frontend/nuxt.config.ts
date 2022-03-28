import { defineNuxtConfig } from 'nuxt3';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: ["@nuxtjs/strapi", "@nuxtjs/tailwindcss"],
  head: {
    link: [
      {
        rel: "stylesheet",
        href: "https://rsms.me/inter/inter.css",
      },
    ],
  },
  publicRuntimeConfig: {
    APP_NAME: process.env.APP_NAME,
  },
});
