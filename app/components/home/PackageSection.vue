<template>
    <div class="bg-white min-h-screen p-8 font-serif">
        <section class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 mb-20">
            <div class="w-full md:w-1/3">
                <div class="bg-yellow-10 rounded-3xl p-4 shadow-2xl border border-gray-100 text-center">
                    <img src="https://i.pinimg.com/736x/30/a8/87/30a8873195203d2f8197c7b57241df7b.jpg"
                        class="rounded-2xl w-full h-64 object-cover mb-6" alt="Couple" />
                    <div class="text-yellow-500 text-2xl mb-2">♥</div>
                    <h2 class="text-2xl font-bold mb-1">រត្នៈ និង សុម៉ាលី</h2>
                    <p class="text-yellow-600 text-sm mb-4">បង្ហាញការអញ្ជើញ</p>
                    <p class="text-gray-400 text-xs mb-6">២៩ ធ្នូ ២០២៤</p>
                    <button class="bg-black/10 backdrop-blur-md border border-white/30 text-white font-bold text-black px-8 py-2 rounded-full font-bold w-full">
                        មើលរូបភាពអញ្ជើញ
                    </button>
                    <!-- w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold rounded-xl hover:bg-white/20 transition-all -->
                </div>
            </div>

            <div class="w-full md:w-2/3">
                <span class="text-yellow-500 font-bold text-sm preahvihear-regular">សេវាកម្មដ៏ពិសេសបំផុត</span>
                <h1 class="text-5xl font-extrabold mb-6 konkhmer-sleokchher-regular">ចែករំលែកសេចក្តីរីករាយរបស់អ្នក</h1>
                <p class="text-gray-600 leading-relaxed mb-8 preahvihear-regular">
                    ផ្លាស់ប្តូររូបថត Pre-wedding របស់អ្នកទៅជាបទពិសោធន៍ដ៏រីករាយ និងចងចាំ
                </p>

                <div class="flex gap-8 mb-8">
                    <div class="flex items-start gap-3">
                        <div class="p-3 bg-yellow-100 rounded-lg">📸</div>
                        <div>
                            <h4 class="font-bold preahvihear-regular">ភាពងាយស្រួល</h4>
                            <p class="text-xs text-gray-500 ">ស្កេន QR កូដដើម្បីចូលមើល</p>
                        </div>
                    </div>
                    <div class="flex items-start gap-3">
                        <div class="p-3 bg-yellow-100 rounded-lg">👥</div>
                        <div>
                            <h4 class="font-bold preahvihear-regular">ការគ្រប់គ្រងភ្ញៀវ</h4>
                            <p class="text-xs text-gray-500 preahvihear-regular">តាមដានចំនួនអ្នកចូលរួម</p>
                        </div>
                    </div>
                </div>

                <button class="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-2">
                    បង្កើតចំណងដៃអេឡិចត្រូនិច <span class="text-xl">→</span>
                </button>
            </div>
        </section>

        <!-- <hr class="border-gray-100 mb-16" />

        <div class="max-w-6xl mx-auto flex justify-between items-end mb-8">
            <div>
                <span class="text-yellow-500 font-bold">រូបភាពគំរូ</span>
                <h3 class="text-3xl font-bold">វគ្គថតរូបលេចធ្លោ</h3>
            </div>
            <button class="text-sm font-bold border-b-2 border-yellow-400">មើលទាំងអស់ +</button>
        </div>

        <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="pkg in packages" :key="pkg.id">
                <PackageCard :pkg="pkg" />
            </div>
        </div> -->
    </div>
</template>

<script setup>
import { usePackages } from '@/composables/usePackages'
import PackageCard from './PackageCard.vue'

const { packages } = usePackages()
</script>
