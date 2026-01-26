<template>
  <section class="gallery-page">
    <h1>Gallery</h1>
    <p>Our beautiful wedding moments.</p>

    <div class="gallery-grid">
      <img v-for="i in 6" :key="i" :src="`/images/gallery-${i}.jpg`" />
    </div>
  </section>
</template>

<script setup>
useSeoMeta({
  title: 'Gallery',
  description: 'Wedding & Pre-wedding gallery'
})
</script>

<style scoped>
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
}
.gallery-grid img {
  width: 100%;
  border-radius: 14px;
}
</style>
