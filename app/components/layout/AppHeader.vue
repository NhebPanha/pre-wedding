<template>
    <header
        class="sticky top-0 z-50 w-full bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-champagne dark:border-white/10">
        <div class="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
            <!-- Logo -->
            <div class="flex items-center gap-3">
                <div class="text-primary">
                    <span class="material-symbols-outlined text-4xl"
                        style="font-variation-settings: 'FILL' 1">camera</span>
                </div>
                <div class="flex flex-col">
                    <h1 class="text-xl font-black tracking-tighter leading-none">ETERNAL KHMER</h1>
                    <span class="text-[10px] uppercase tracking-[0.3em] font-medium opacity-70">ស្ទូឌីយោថតរូប</span>
                </div>
            </div>

            <!-- Desktop Nav -->
            <nav class="hidden md:flex items-center gap-10">
                <NuxtLink class="text-sm font-semibold hover:text-primary transition-colors" to="#">មើលស្នាដៃ</NuxtLink>
                <NuxtLink class="text-sm font-semibold hover:text-primary transition-colors" to="#">កញ្ចប់សេវាកម្ម
                </NuxtLink>
                <NuxtLink class="text-sm font-semibold hover:text-primary transition-colors" to="#">លិខិតអញ្ជើញឌីជីថល
                </NuxtLink>
                <NuxtLink class="text-sm font-semibold hover:text-primary transition-colors" to="#">មតិអតិថិជន
                </NuxtLink>
            </nav>

            <!-- CTA + Avatar -->
            <div class="flex items-center gap-4 md:gap-6">
                <button
                    class="bg-primary hover:bg-primary/90 text-charcoal px-4 md:px-6 py-2.5 rounded-lg text-sm font-bold tracking-wide transition-all shadow-sm">
                    កក់ការថតរូប
                </button>
                <div class="h-10 w-10 rounded-full border border-champagne overflow-hidden bg-cover bg-center"
                    style="background-image: url('https://i.pinimg.com/1200x/13/50/3c/13503c6f3ac753324a55f27589231125.jpg')">
                </div>

                <!-- Mobile Menu Button -->
                <button
                    class="md:hidden p-2 rounded-md text-charcoal dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                    @click="menuOpen = !menuOpen">
                    <span class="material-symbols-outlined text-3xl">menu</span>
                </button>
            </div>
        </div>

        <!-- Mobile Menu -->
        <transition name="slide-fade">
            <nav v-if="menuOpen"
                class="md:hidden bg-background-light dark:bg-background-dark border-t border-champagne dark:border-white/10 px-6 py-4 flex flex-col gap-4">
                <NuxtLink class="text-sm font-semibold hover:text-primary transition-colors" to="#">មើលស្នាដៃ</NuxtLink>
                <NuxtLink class="text-sm font-semibold hover:text-primary transition-colors" to="#">កញ្ចប់សេវាកម្ម
                </NuxtLink>
                <NuxtLink class="text-sm font-semibold hover:text-primary transition-colors" to="#">លិខិតអញ្ជើញឌីជីថល
                </NuxtLink>
                <NuxtLink class="text-sm font-semibold hover:text-primary transition-colors" to="#">មតិអតិថិជន
                </NuxtLink>
            </nav>
        </transition>
    </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const menuOpen = ref(false)
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>
