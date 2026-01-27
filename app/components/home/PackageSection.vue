<template>
  <section class="relative overflow-hidden bg-gradient-to-b from-[#fcfaf5] to-white py-20 px-4">
    <!-- Decorative background -->
    <div class="absolute -top-32 -left-32 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl"></div>
    <div class="absolute top-1/2 -right-32 w-96 h-96 bg-yellow-300/10 rounded-full blur-3xl"></div>

    <div class="relative max-w-7xl mx-auto">

      <!-- Title -->
      <div class="text-center mb-16">
        <SectionTitle title="ជ្រើសរើសកញ្ចប់សេវាកម្ម" subtitle="Pre-Wedding & Wedding Photography" />

        <!-- Accent line -->
        <div class="mt-6 flex justify-center">
          <span class="w-20 h-[3px] bg-yellow-400 rounded-full"></span>
        </div>
      </div>

      <!-- Packages -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        <PackageCard v-for="pkg in packages" :key="pkg.id" :pkg="pkg"
          class="transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl" />
      </div>

      <!-- Bottom CTA -->
      <div class="mt-20 text-center">
        <p class="text-gray-500 mb-6">
          មិនប្រាកដថាត្រូវជ្រើសកញ្ចប់ណា?
        </p>
        <button
          class="inline-flex items-center gap-2 rounded-xl bg-black px-8 py-3 text-white font-medium hover:bg-gray-800 transition">
          មើលកញ្ចប់ទាំងអស់
          <span class="text-lg">→</span>
        </button>
      </div>

    </div>
  </section>
</template>

<script setup>
import { usePackages } from '@/composables/usePackages'
import PackageCard from './PackageCard.vue'

const { packages } = usePackages()
</script>
