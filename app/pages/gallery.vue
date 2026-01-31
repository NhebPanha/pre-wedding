<template>
  <!-- Hero -->
  <section class="relative py-20 bg-primary-100 overflow-hidden">
    <div class="absolute inset-0 romduol-pattern opacity-30"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 text-center">
      <h1 class="text-5xl md:text-6xl font-black mb-4">រូបភាបទាំងអស់</h1>
      <p class="max-w-2xl mx-auto text-lg opacity-70">
        សូមរីករាយជាមួយនឹងការប្រមូលផ្តុំរូបភាពពិសេសៗពីពិធីមង្គលការនិងពិធីមុនមង្គលការដ៏អស្ចារ្យរបស់យើង។
      </p>
    </div>
  </section>

  <!-- Gallery -->
  <section class="py-24 px-6 lg:px-10 bg-secondary-50 dark:bg-secondary-900">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        <div
          v-for="img in images"
          :key="img"
          class="group relative overflow-hidden rounded-2xl cursor-pointer"
          @click="selectedImage = img"
        >
          <img
            :src="img"
            class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
            alt="Wedding gallery"
          />

          <!-- Hover overlay -->
          <div
            class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-center justify-center"
          >
            <span
              class="material-symbols-outlined text-white text-4xl opacity-0 group-hover:opacity-100 transition"
            >
              zoom_in
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Lightbox -->
  <div
    v-if="selectedImage"
    class="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
  >
    <button
      class="absolute top-6 right-6 text-white"
      @click="selectedImage = null"
    >
      <span class="material-symbols-outlined text-3xl">close</span>
    </button>

    <img
      :src="selectedImage"
      class="max-h-[85vh] max-w-full rounded-2xl shadow-2xl"
      alt="Preview"
    />
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Gallery | Wedding Photography",
  description: "Wedding & Pre-wedding gallery",
});

const images = [
  "banner_image.png",
  "banner_image1.png",
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg",
  "images/image4.jpg",
  "images/image5.jpg",
  "images/image6.jpg",
  "images/image7.jpg",
  "images/image8.jpg",
  "images/image9.jpg",
  "images/image10.jpg",
  "images/image17.jpg",
  "images/image12.jpg",
  "images/image13.jpg",
  "images/image14.jpg",
  "images/image15.jpg",
  "images/image16.jpg",
];

const selectedImage = ref(null);
</script>
