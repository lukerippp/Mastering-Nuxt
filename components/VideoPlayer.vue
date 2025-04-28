<template>
  <div class="w-full max-w-3xl mx-auto aspect-video">
    <iframe
      class="w-full h-full rounded-md shadow"
      :src="`https://player.vimeo.com/video/${props.videoId}`"
      title="Video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>


<script setup>
const props = defineProps({
  videoId: {
    type: Number,
    required: true,
  },
});
</script>
