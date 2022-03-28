<template>
  <div>
    {{ $route.params.id }}
    {{ $route.params.title }}
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: "TEST",
});
</script>
