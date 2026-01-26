<template>
    <footer class="bg-[#0a2342] text-white pt-24">
        <!-- Call to Action -->
        <div class="max-w-5xl mx-auto text-center px-6">
            <h2 class="font-moul text-2xl md:text-3xl leading-relaxed mb-6">
                ត្រៀមខ្លួនសម្រាប់រឿងរ៉ាវស្នេហ៍ដ៏អមតៈរបស់អ្នកឬនៅ?
            </h2>

            <p class="text-sm text-[#d4af37] opacity-90 mb-10 font-khmer">
                យើងខ្ញុំប្តេជ្ញាចិត្តផ្តិតយកគ្រប់អារម្មណ៍
                និងភាពស្រស់ស្អាតនៃពេលវេលាដ៏មានតម្លៃ
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                    class="bg-[#d4af37] text-[#0a2342] font-bold px-8 py-4 rounded-lg flex items-center justify-center gap-2">
                    កក់ថ្ងៃថតរូប
                    <span class="material-symbols-outlined text-base">calendar_month</span>
                </button>

                <button
                    class="border border-[#d4af37] text-[#d4af37] font-bold px-8 py-4 rounded-lg flex items-center justify-center gap-2">
                    ទំនាក់ទំនងយើង
                    <span class="material-symbols-outlined text-base">mail</span>
                </button>
            </div>
        </div>

        <!-- Divider -->
        <div class="border-t border-white/10 mt-20"></div>

        <!-- Bottom Footer -->
        <div class="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <!-- Brand -->
            <div class="flex items-center gap-2 text-[#d4af37] font-bold tracking-widest">
                <span class="text-xl">⌛</span>
                <span class="uppercase">ETERNAL STORY</span>
            </div>

            <!-- Menu -->
            <nav class="flex gap-8 text-sm text-white/70 font-khmer">
                <NuxtLink to="/" class="hover:text-[#d4af37]">ទំព័រដើម</NuxtLink>
                <NuxtLink to="/gallery" class="hover:text-[#d4af37]">ស្នាដៃ</NuxtLink>
                <NuxtLink to="/packages" class="hover:text-[#d4af37]">កញ្ចប់សេវា</NuxtLink>
                <NuxtLink to="/contact" class="hover:text-[#d4af37]">ទំនាក់ទំនង</NuxtLink>
            </nav>

            <!-- Social -->
            <div class="flex gap-4 text-[#d4af37]">
                <button class="hover:scale-110 transition">
                    <span class="material-symbols-outlined">photo_camera</span>
                </button>
                <button class="hover:scale-110 transition">
                    <span class="material-symbols-outlined">play_circle</span>
                </button>
                <button class="hover:scale-110 transition">
                    <span class="material-symbols-outlined">language</span>
                </button>
            </div>
        </div>

        <!-- Copyright -->
        <p class="text-center text-xs text-white/40 pb-6">
            © 2025 Eternal Story Photography. រក្សាសិទ្ធិគ្រប់យ៉ាង
        </p>
    </footer>
</template>
