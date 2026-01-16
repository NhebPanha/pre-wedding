<template>
  <div>
    <!-- HEADER -->
    <header
      class="sticky top-0 z-50 w-full bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-champagne dark:border-white/10"
    >
      <div class="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="text-primary">
            <span class="material-symbols-outlined text-4xl" style="font-variation-settings: 'FILL' 1">
              camera
            </span>
          </div>
          <div class="flex flex-col">
            <h1 class="text-xl font-black tracking-tighter leading-none">ETERNAL KHMER</h1>
            <span class="text-[10px] uppercase tracking-[0.3em] font-medium opacity-70">
              Photography Studio
            </span>
          </div>
        </div>

        <nav class="hidden md:flex items-center gap-10">
          <NuxtLink class="text-sm font-semibold hover:text-primary" to="/">មើលស្នាដៃ</NuxtLink>
          <NuxtLink class="text-sm font-semibold hover:text-primary" to="/">កញ្ចប់សេវាកម្ម</NuxtLink>
          <NuxtLink class="text-sm font-semibold hover:text-primary" to="/">លិខិតអញ្ជើញឌីជីថល</NuxtLink>
          <NuxtLink class="text-sm font-semibold hover:text-primary" to="/">មតិអតិថិជន</NuxtLink>
        </nav>

        <button class="font-khmer bg-primary px-6 py-2.5 rounded-lg text-sm font-bold">
          កក់ការថតរូប
        </button>
      </div>
    </header>

    <!-- PAGE CONTENT -->
    <slot />

    <!-- FOOTER -->
    <footer class="bg-background-light dark:bg-background-dark border-t py-12 px-6">
      <div class="max-w-7xl mx-auto text-center text-[10px] uppercase tracking-[0.4em] opacity-40">
        © ២០២៤ Eternal Khmer Photography. រក្សាសិទ្ធិគ្រប់យ៉ាង។
      </div>
    </footer>
  </div>
</template>
