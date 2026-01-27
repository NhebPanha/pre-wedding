<template>
    <section class="py-24 px-6 bg-gradient-to-b from-red-50 to-white">
        <div class="max-w-6xl mx-auto">
            <h2 class="text-4xl font-extrabold mb-2 text-red-900">វគ្គថតរូបលេចធ្លោ</h2>
            <p class="text-gray-600 mb-12">ពេលកាលឈឺចាប់នៃក្រុមគ្រួសារ</p>

            <div class="grid md:grid-cols-3 gap-8">
                <div v-for="(img, i) in images" :key="i" class="group cursor-pointer">
                    <div class="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                        <div class="aspect-[3/4] bg-cover bg-center" :style="{ backgroundImage: `url(${img})` }" />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div class="mt-4 text-center">
                        <p class="text-sm font-semibold text-red-900">រូបថតលេខ {{ i + 1 }}</p>
                        <p class="text-xs text-gray-500">ថ្ងៃពិសេស</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const images = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBPPYMSOMVkJHHp1vJLoMu5B4AGxxyLJ-15uKW-jpg85o6p8sELpzYOFqu0DjmzAkc990zJgmaByZipi5XhF--AdWGpl_RLUowOg-rKy0q_ehwP0jocH6r2-fx4P93zbaKcd-_zP_zerkdu3RIvhh_ddaxMZleyAZs9Kxd_ZvPy1uQ76XoVPhrYj_ioi1RcamxHG_c4UCYTtv5FPaMmodQAqEkMOUCLD3I4ULy-8Avbuv07KvRbvUDKo6IyfgcmhAxo4V4vz7vWug'
]
</script>
