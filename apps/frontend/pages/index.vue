<template>
  <div class="max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
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
</template>

<script setup lang="ts">
const { find } = useStrapi4();

definePageMeta({
  title: "Home",
});
const response = await find("articles");
</script>
