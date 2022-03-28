<template>
  <slot />
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const route = useRoute();

useMeta({
  htmlAttrs: {
    class: "h-full bg-gray-50",
  },
  bodyAttrs: {
    class: "h-full",
  },
  title: computed(() => `${config.APP_NAME} - ${route.meta.title}`),
});
</script>
