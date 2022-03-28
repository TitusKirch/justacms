<template>
  <div
    class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
  >
    <div>
      {{ response }}
    </div>
    <div class="relative max-w-7xl mx-auto">
      <div
        class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"
      >
        <ArticleBox class="lg:col-span-2" />
        <ArticleBox />
        <ArticleBox />
        <ArticleBox />
        <ArticleBox />
        <ArticleBox />
        <ArticleBox class="lg:col-span-2" />
        <ArticleBox />
        <ArticleBox />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { find } = useStrapi4();

definePageMeta({
  title: "Home",
});
const response = await find("articles");
</script>
