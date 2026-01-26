<template>
    <section class="py-24 px-6">
        <h2 class="text-3xl font-extrabold mb-12">វគ្គថតរូបលេចធ្លោ</h2>

        <div class="grid md:grid-cols-3 gap-8">
            <div v-for="(img, i) in images" :key="i" class="aspect-[3/4] rounded-2xl bg-cover bg-center shadow-lg"
                :style="{ backgroundImage: `url(${img})` }" />
        </div>
    </section>
</template>

<script setup>
const images = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBPPYMSOMVkJHHp1vJLoMu5B4AGxxyLJ-15uKW-jpg85o6p8sELpzYOFqu0DjmzAkc990zJgmaByZipi5XhF--AdWGpl_RLUowOg-rKy0q_ehwP0jocH6r2-fx4P93zbaKcd-_zP_zerkdu3RIvhh_ddaxMZleyAZs9Kxd_ZvPy1uQ76XoVPhrYj_ioi1RcamxHG_c4UCYTtv5FPaMmodQAqEkMOUCLD3I4ULy-8Avbuv07KvRbvUDKo6IyfgcmhAxo4V4vz7vWug'
]
</script>
