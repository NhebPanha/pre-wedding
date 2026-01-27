<template>
    <section class="relative">
        <div class="max-w-[1440px] mx-auto lg:p-6">
            <div
                class="relative min-h-[700px] flex flex-col items-center justify-center text-center px-6 rounded-3xl overflow-hidden shadow-2xl">
                <div class="absolute inset-0 bg-cover bg-center"
                    style="background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('https://i.pinimg.com/1200x/68/ab/ff/68abffe20f9d59367e56e32360899e75.jpg');">
                </div>
                <div class="relative z-10 max-w-4xl space-y-6">
                    <div
                        class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-[0.2em] mb-4">
                        <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        ប្រពៃណី និង សិល្បៈ
                    </div>
                    <h1 class="text-4xl md:text-7xl font-black text-white leading-[1.3] tracking-tight">
                        ការផ្តិតយកចំណងស្នេហ៍ <br /><span class="text-primary italic text-yellow-500">ដ៏នៅអមតៈ</span> របស់លោកអ្នក
                    </h1>
                    <p class="text-white/80 text-lg md:text-xl font-normal max-w-2xl mx-auto leading-relaxed preahvihear-regular">
                        យើងខ្ញុំរួមបញ្ចូលគ្នានូវភាពស្រស់ស្អាតមិនចេះរីងស្ងួតនៃសូត្រខ្មែរ និងគ្រឿងអលង្ការមាស
                        ជាមួយនឹងបច្ចេកទេសថតរូបទំនើប ដើម្បីបង្កើតអនុស្សាវរីយ៍ដែលស្ថិតស្ថេរជាដរាប។
                    </p>
                    <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <button
                            class="w-full sm:w-auto px-8 py-4 bg-white text-charcoal font-bold rounded-xl hover:bg-yellow-500 transition-all flex items-center justify-center gap-2 shadow-lg">
                            មើលស្នាដៃ
                        </button>
                        <button
                            class="w-full sm:w-auto px-8 py-4 bg-white text-charcoal font-bold rounded-xl hover:bg-yellow-500 transition-all flex items-center justify-center gap-2 shadow-lg">
                            <span class="material-symbols-outlined text-xl">send</span>
                            អញ្ជើញភ្ញៀវ
                        </button>
                        <button
                            class="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold rounded-xl hover:bg-white/20 transition-all">
                            កញ្ចប់សេវាកម្មរបស់យើង
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const openMessenger = () => {
    window.open("https://m.me/khfashionstudio", "_blank");
};
</script>