<script setup>
const features = [
  {
    title: 'Mastering Nuxt 3',
    description: 'Dive deep into Nuxt’s capabilities with structured chapters and lessons.',
  },
  {
    title: 'Dynamic Routing',
    description: 'Learn how Nuxt handles nested routes, parameters, and page composition.',
  },
  {
    title: 'TypeScript Friendly',
    description: 'Enjoy type-safe logic, props, and composables across your project.',
  },
]
</script>

<template>
  <main class="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gray-50 text-slate-800">
    <h1 class="text-4xl font-extrabold mb-4 text-center">Welcome to Your Nuxt 3 Course Platform</h1>
    <p class="text-lg text-center mb-10 max-w-xl text-slate-600">
      Build, learn, and scale with the power of Nuxt 3, Tailwind CSS, and Vue Composition API.
    </p>

    <div class="grid md:grid-cols-3 gap-6 max-w-5xl w-full">
      <div
        v-for="(feature, index) in features"
        :key="index"
        class="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
      >
        <h3 class="font-bold text-lg mb-2">{{ feature.title }}</h3>
        <p class="text-slate-600">{{ feature.description }}</p>
      </div>
    </div>

    <div class="mt-12">
      <NuxtLink
        to="/course/chapter/1-chapter-1/lesson/1-introduction-to-typescript-with-vue-js-3"
        class="inline-block bg-sky-600 text-white font-semibold py-3 px-6 rounded-md shadow transition"
      >
        Start Learning
      </NuxtLink>
    </div>
  </main>
</template>
