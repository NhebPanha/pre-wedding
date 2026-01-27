<template>
  <header
    class="sticky top-0 z-50 w-full bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-champagne/30 dark:border-white/10 supports-[backdrop-filter]:bg-background-light/70 dark:supports-[backdrop-filter]:bg-background-dark/70"
    :class="{ 'shadow-md': menuOpen }"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2 md:gap-3 group" @click="menuOpen = false">
        <div class="relative">
          <div class="text-primary group-hover:scale-105 transition-transform duration-300">
            <span
              class="material-symbols-outlined text-3xl md:text-4xl text-yellow-500"
              style="font-variation-settings: 'FILL' 1"
            >
              camera
            </span>
          </div>
          <div class="absolute -inset-1 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"></div>
        </div>
        <div class="flex flex-col">
          <h1 class="text-lg md:text-xl font-black tracking-tighter leading-none">PANHA KHMER</h1>
          <span class="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-medium opacity-70">
            បញ្ញា​​​ ខ្មែរ
          </span>
        </div>
      </NuxtLink>

      <!-- Desktop Navigation -->
      <nav class="hidden lg:flex items-center gap-6 xl:gap-8">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.id"
          :to="link.to"
          class="relative text-sm font-semibold hover:text-primary transition-colors duration-300 px-1 py-2 group"
          active-class="text-primary"
        >
          {{ link.label }}
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
        </NuxtLink>
      </nav>

      <!-- CTA & User Section -->
      <div class="flex items-center gap-2 sm:gap-3 md:gap-6">
        <!-- Desktop CTA Button -->
        <button
          class="hidden sm:flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-charcoal px-4 md:px-6 py-2.5 rounded-lg text-sm font-bold tracking-wide transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95"
          @click="handleBooking"
        >
          <span class="material-symbols-outlined text-base">calendar_month</span>
          <span>កក់ការថតរូប</span>
        </button>

       

        <!-- User Avatar -->
        <div class="relative">
          <div
            class="h-8 w-8 md:h-10 md:w-10 rounded-full border-2 border-yellow-500/80 overflow-hidden bg-cover bg-center cursor-pointer transition-transform duration-300 shadow-inner"
            style="background-image: url('https://i.pinimg.com/1200x/36/fc/c7/36fcc767ca5725d213dca3d002e23d5a.jpg')"
            @click="toggleUserMenu"
            aria-label="User menu"
          >
           
         
          </div>
          
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="lg:hidden p-2 rounded-md text-red-500 dark:text-white hover:bg-yellow-300 dark:hover:bg-yellow-700 transition-colors duration-200 ml-1"
          @click="menuOpen = !menuOpen"
          :aria-expanded="menuOpen"
          :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
        >
          <span class="material-symbols-outlined text-2xl text-yellow-500">
            {{ menuOpen ? 'close' : 'menu' }}
          </span>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-200 ease-in"
      enter-from-class="opacity-0 max-h-0"
      enter-to-class="opacity-100 max-h-96"
      leave-from-class="opacity-100 max-h-96"
      leave-to-class="opacity-0 max-h-0"
    >
      <nav
        v-show="menuOpen"
        class="lg:hidden bg-background-light dark:bg-background-dark border-t border-champagne/30 dark:border-white/10 px-4 py-4 shadow-lg"
      >
        <div class="flex flex-col gap-1">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.id"
            :to="link.to"
            class="flex items-center gap-3 text-sm font-semibold hover:text-primary hover:bg-yellow-500 dark:hover:bg-yellow-600 transition-colors duration-200 px-4 py-3 rounded-lg"
            active-class="text-primary bg-gray-100 dark:bg-gray-800"
            @click="menuOpen = false"
          >
            <span class="material-symbols-outlined text-lg opacity-70">{{ link.icon }}</span>
            <span>{{ link.label }}</span>
          </NuxtLink>
          
          <!-- Mobile CTA in menu -->
          <button
            class="mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-charcoal px-6 py-3 rounded-lg text-sm font-bold tracking-wide transition-all duration-300 shadow-md hover:shadow-lg"
            @click="handleBooking"
          >
            <span class="material-symbols-outlined text-lg">calendar_month</span>
            <span>កក់ការថតរូប</span>
          </button>
        </div>
      </nav>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const menuOpen = ref(false)

const navLinks = [
  { id: 1, label: 'មើលស្នាដៃ', to: '#portfolio', icon: 'collections' },
  { id: 2, label: 'កញ្ចប់សេវាកម្ម', to: '#services', icon: 'package' },
  { id: 3, label: 'លិខិតអញ្ជើញឌីជីថល', to: '#invitations', icon: 'mail' },
  { id: 4, label: 'មតិអតិថិជន', to: '#testimonials', icon: 'star' }
]

const handleBooking = () => {
  menuOpen.value = false
  // Add your booking logic here
  console.log('Booking initiated')
}

const toggleUserMenu = () => {
  // Add user menu logic here
  console.log('User menu toggled')
}

</script>

<style scoped>
/* Active link styles for desktop */
.router-link-active:not(.text-primary) {
  @apply text-gray-900 dark:text-white;
}

/* Smooth scrolling for anchor links */
@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}

/* Improve touch targets on mobile */
@media (max-width: 640px) {
  button, [role="button"] {
    min-height: 44px;
    min-width: 44px;
  }
  
  a {
    min-height: 44px;
    display: flex;
    align-items: center;
  }
}

/* Better focus styles for accessibility */
:focus-visible {
  @apply outline-2 outline-primary outline-offset-2;
}
</style>