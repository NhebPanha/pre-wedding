<template>
  <footer class="bg-[#0B1E3B] text-white pt-20 pb-6">
    <div class="max-w-4xl mx-auto text-center px-6">
      <div class="w-12 h-12 bg-gray-400/30 rounded-md mx-auto mb-10">
        <span class="material-symbols-outlined text-3xl md:text-4xl text-yellow-500"
          style="font-variation-settings: 'FILL' 1">
          photo_camera
        </span>
      </div>

      <h2 class="text-3xl md:text-4xl font-black mb-6 leading-tight tracking-wide font-khmer">
        ត្រៀមខ្លួនសម្រាប់រឿងរ៉ាវស្រស់ស្អាតរបស់អ្នកហើយឬនៅ?
      </h2>

      <p class="text-[#d4af37] text-base md:text-lg opacity-80 mb-12 max-w-2xl mx-auto leading-relaxed">
        យើងនៅទីនេះដើម្បីបង្កើតបទពិសោធន៍ពិសេសដែលអ្នកនិងអ្នកស្រលាញ់របស់អ្នកនឹងចងចាំជានិច្ច។
      </p>

      <div class="flex flex-col sm:flex-row gap-5 justify-center mb-24">
        <button
          class="bg-[#EBC410] text-[#0B1E3B] font-black px-10 py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-yellow-400 transition-all transform active:scale-95 shadow-lg shadow-yellow-500/10">
          មើលធថ្ងៃរៀបការ
          <span class="material-symbols-outlined text-xl">calendar_month</span>
        </button>

        <button
          class="border-2 border-[#EBC410] text-[#EBC410] font-black px-10 py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-[#EBC410]/10 transition-all transform active:scale-95">
          ទាក់ទងមកយើង
          <span class="material-symbols-outlined text-xl">mail</span>
        </button>
      </div>
    </div>

    <div class="max-w-7xl mx-auto border-t border-white/10 mb-12"></div>

    <div class="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">

      <div class="flex items-center gap-3 text-[#EBC410]">
        <div class="w-6 h-6  rounded-sm flex items-center justify-center">
          <span class="material-symbols-outlined text-3xl md:text-4xl text-yellow-500"
            style="font-variation-settings: 'FILL' 1">
            camera
          </span>
        </div>
        <span class="uppercase font-black tracking-[0.2em] text-sm">PANHA KHMER</span>
      </div>

      <nav class="flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm font-medium text-white/80">
        <NuxtLink to="/" class="hover:text-[#EBC410] transition-colors">ទីតាំងដើម</NuxtLink>
        <NuxtLink to="/gallery" class="hover:text-[#EBC410] transition-colors">ការបង្ហាញរូបភាព</NuxtLink>
        <NuxtLink to="/services" class="hover:text-[#EBC410] transition-colors">អតិថិជន</NuxtLink>
        <NuxtLink to="/contact" class="hover:text-[#EBC410] transition-colors">ទំនាក់ទំនង</NuxtLink>
      </nav>

      <div class="flex gap-6 text-[#EBC410]/80">
        <button class="hover:text-[#EBC410] hover:scale-110 transition">
          <span class="material-symbols-outlined text-xl">photo_camera</span>
        </button>
        <button class="hover:text-[#EBC410] hover:scale-110 transition">
          <span class="material-symbols-outlined text-xl">play_circle</span>
        </button>
        <button class="hover:text-[#EBC410] hover:scale-110 transition">
          <span class="material-symbols-outlined text-xl">language</span>
        </button>
      </div>
    </div>

    <div class="mt-16 text-center">
      <p class="text-[10px] uppercase tracking-widest text-white/30">
        © 2026 Eternal Story Photography. រក្សាសិទ្ធិគ្រប់យ៉ាង
      </p>
    </div>
  </footer>
</template>