<script setup>
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
    <h1 class="text-4xl font-bold mb-4 text-sky-600">
      Welcome to the Course Platform
    </h1>
    <p class="text-gray-600 mb-8 text-center max-w-xl">
      Master modern web development using Nuxt 3, Vue 3, TypeScript, and TailwindCSS.
      Explore dynamic lessons, mark your progress, and level up your skills.
    </p>

    <NuxtLink
        to="/course/chapter/1-chapter-1/lesson/1-introduction-to-typescript-with-vue-js-3"
        class="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition"
        >
        Browse Courses →
    </NuxtLink>
  </div>
</template>

<style scoped>
</style>
