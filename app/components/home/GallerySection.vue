<template>
  <section class="max-w-[1440px] mx-auto py-16 px-6 md:px-12 bg-[#fafafa]">
    <div class="flex justify-between items-end mb-12">
      <div>
        <span
          class="text-[10px] uppercase tracking-widest text-yellow-400 mb-2 block font-bold">រូបភាពអាពាហ៍ពិពាហ៍</span>
        <h2 class="text-2xl md:text-3xl font-black text-[#1a1a1a] font-moul">
          វគ្គថតរូបលេចធ្លោ
        </h2>
      </div>
      <button
        class="hidden md:flex items-center gap-2 text-sm font-bold border-b-2 border-black pb-1 hover:opacity-60 transition-all">
        មើលរឿងស្នាដៃទាំងអស់ <span class="material-symbols-outlined text-sm">add</span>
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 items-center">
      <div class="group cursor-pointer">
        <div
          class="aspect-[4/5] overflow-hidden rounded-[2rem] shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
          <img :src="images[0]"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Wedding 1">
        </div>
      </div>

      <div class="group cursor-pointer md:mt-12">
        <div
          class="aspect-[4/5] overflow-hidden rounded-[2rem] shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
          <img :src="images[1]"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Wedding 2">
        </div>
      </div>

      <div class="group cursor-pointer">
        <div
          class="aspect-[4/5] overflow-hidden rounded-[2rem] shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
          <img :src="images[2]"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Wedding 3">
        </div>
      </div>
    </div>

    <div class="mt-10 md:hidden flex justify-center">
      <button class="px-8 py-3 border border-black rounded-full font-bold text-sm">
        មើលទាំងអស់
      </button>
    </div>
  </section>
</template>

<script setup>

const images = [
  'https://i.pinimg.com/1200x/8e/8c/c7/8e8cc7c156b7218b02ee9e79d09c33c3.jpg',
  'https://i.pinimg.com/1200x/3d/fe/ae/3dfeaefab1e32f8fb34f29f579b84c07.jpg',
  'https://i.pinimg.com/736x/8f/8f/db/8f8fdb50f2cf6bd6bfe7b34ba14585c3.jpg'
]
</script>

<style scoped>

</style>