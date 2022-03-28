<template>
  <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
    <div class="flex-shrink-0">
      <img class="h-48 w-full object-cover" :src="post.imageUrl" alt="" />
    </div>
    <div class="flex-1 bg-white p-6 flex flex-col justify-between">
      <div class="flex-1">
        <p class="text-sm font-medium text-teal-600">
          <a :href="post.category.href" class="hover:underline">
            {{ post.category.name }}
          </a>
        </p>
        <a :href="post.href" class="block mt-2">
          <p class="text-xl font-semibold text-gray-900">
            {{ post.title }}
          </p>
          <p class="mt-3 text-base text-gray-500">
            {{ post.description }}
          </p>
        </a>
      </div>
      <div class="mt-6 flex items-center">
        <div class="flex-shrink-0">
          <a :href="post.author.href">
            <span class="sr-only">{{ post.author.name }}</span>
            <img
              class="h-10 w-10 rounded-full"
              :src="post.author.imageUrl"
              alt=""
            />
          </a>
        </div>
        <div class="ml-3">
          <p class="text-sm font-medium text-gray-900">
            <a :href="post.author.href" class="hover:underline">
              {{ post.author.name }}
            </a>
          </p>
          <div class="flex space-x-1 text-sm text-gray-500">
            <time :datetime="post.datetime">
              {{ post.date }}
            </time>
            <span aria-hidden="true"> &middot; </span>
            <span> {{ post.readingTime }} read </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const post = ref({
  title: "Boost your conversion rate",
  href: "#",
  category: { name: "Article", href: "#" },
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
  date: "Mar 16, 2020",
  datetime: "2020-03-16",
  imageUrl:
    "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
  readingTime: "6 min",
  author: {
    name: "Roel Aufderehar",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
});
</script>
