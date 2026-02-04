<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router'

/* ================= ROUTER ================= */
const route = useRoute()
const router = useRouter()

/* ================= STATE ================= */

// login account
const menuOpen = ref(false)
const userMenuOpen = ref(false)
const loginOpen = ref(false)

const loginForm = ref({
  email: '',
  password: ''
})

// register account
const registerOpen = ref(false)
const loading = ref(false)
const showPassword = ref(false)
const showConfirm = ref(false)
const form = ref({
  name: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: ''
})

// check error register
const error = ref('')


const userMenuRef = ref<HTMLElement | null>(null)

/* ================= NAV ================= */
const navLinks = [
  { id: 1, label: 'មើលស្នាដៃ', to: '/', icon: 'home' },
  { id: 2, label: 'រូបភាពទាំងអស់', to: '/gallery', icon: 'collections' },
  { id: 3, label: 'លិខិតអញ្ជើញឌីជីថល', to: '/services', icon: 'package' },
  { id: 4, label: 'ភ្ញៀវកេត្តិយស', to: '/contact', icon: 'mail' }
]

const isActive = (path: string) => route.path === path

/* ================= METHODS ================= */
const toggleUserMenu = () => {
  userMenuOpen.value = !userMenuOpen.value
}

const openLogin = () => {
  userMenuOpen.value = false
  loginOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLogin = () => {
  loginOpen.value = false
  document.body.style.overflow = ''
}

const submitLogin = () => {
  console.log('LOGIN:', loginForm.value)
  closeLogin()
}

const handleBooking = () => {
  menuOpen.value = false
  router.push('/booking/Booking')
}


/* ================= CLICK OUTSIDE ================= */
const handleClickOutside = (e: MouseEvent) => {
  if (
    userMenuOpen.value &&
    userMenuRef.value &&
    !userMenuRef.value.contains(e.target as Node)
  ) {
    userMenuOpen.value = false
  }
}

const openRegisterFromLogin = () => {
  loginOpen.value = false
  registerOpen.value = true
  document.body.style.overflow = 'hidden'
}

/* ===== OPEN / CLOSE Register account ===== */
const openRegister = () => {
  registerOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeRegister = () => {
  registerOpen.value = false
  document.body.style.overflow = ''
}

/* ===== SUBMIT ===== */
const submitRegister = async () => {
  error.value = ''

  if (form.value.password !== form.value.confirmPassword) {
    error.value = 'ពាក្យសម្ងាត់មិនត្រូវគ្នា'
    return
  }

  loading.value = true

  // 🔐 API later
  console.log('REGISTER:', form.value)

  setTimeout(() => {
    loading.value = false
    closeRegister()
    router.push('/') // or auto login
  }, 1000)
}

const openLoginFromRegister = () => {
  registerOpen.value = false
  loginOpen.value = true
  document.body.style.overflow = 'hidden'
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <!-- ================= HEADER ================= -->
  <header
    class="sticky top-0 z-50 w-full bg-white/10 backdrop-blur-md  bg-white/10 backdrop-blur-md border border-white/10 font-bold rounded-xl hover:bg-white/20 transition-all"
    :class="{ 'shadow-md': menuOpen }"
  >
    <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2" @click="menuOpen = false">
        <span
          class="material-symbols-outlined text-4xl text-yellow-500"
          style="font-variation-settings:'FILL' 1"
        >
          camera
        </span>
        <div>
          <h1 class="font-black leading-none text-black">PANHA KHMER</h1>
          <span class="text-[10px] tracking-widest text-black/70">
            បញ្ញា ខ្មែរ
          </span>
        </div>
      </NuxtLink>

      <!-- Desktop Nav -->
      <nav class="hidden lg:flex gap-6 ">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.id"
          :to="link.to"
          class="relative font-semibold hover:text-yellow-500"
          :class="{ 'text-yellow-500': isActive(link.to) }"
        >
          {{ link.label }}
          <span
            class="absolute left-0 -bottom-1 h-0.5 bg-yellow-500 transition-all"
            :class="isActive(link.to) ? 'w-full' : 'w-0'"
          ></span>
        </NuxtLink>
      </nav>

      <!-- Right Section -->
      <div class="flex items-center gap-3">

        <!-- Booking -->
        <button
          class="hidden sm:flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600
                 text-black px-4 py-2 rounded-lg text-sm font-bold shadow-md"
          @click="handleBooking"
        >
          <span class="material-symbols-outlined text-base">
            calendar_month
          </span>
          ថ្ងៃរៀបការ
        </button>

        <!-- User -->
        <div class="relative" ref="userMenuRef">
          <div
            class="w-10 h-10 rounded-full border-2 border-yellow-500
                   bg-cover bg-center cursor-pointer"
            style="background-image:url('https://i.pinimg.com/1200x/36/fc/c7/36fcc767ca5725d213dca3d002e23d5a.jpg')"
            @click.stop="toggleUserMenu"
          ></div>

          <!-- Dropdown -->
          <transition name="fade">
            <div
              v-if="userMenuOpen"
              class="absolute right-0 top-12 w-44 bg-white rounded-xl shadow border overflow-hidden"
            >
              <button
                class="w-full text-left px-4 py-2 hover:bg-gray-100"
                @click="openLogin"
              >
                🔐 Login
              </button>

              <NuxtLink
                to="/booking/Booking"
                class="block px-4 py-2 hover:bg-gray-100"
              >
                📝 Register
              </NuxtLink>
            </div>
          </transition>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="lg:hidden p-2"
          @click="menuOpen = !menuOpen"
        >
          <span class="material-symbols-outlined text-3xl text-yellow-500">
            {{ menuOpen ? 'close' : 'menu' }}
          </span>
        </button>

      </div>
    </div>
    <!-- Mobile Menu -->
    <transition name="slide">
      <nav
        v-if="menuOpen"
        class="lg:hidden px-4 py-4 border-t bg-white/10 backdrop-blur-md border border-white/30 font-bold rounded-xl hover:bg-white/20 transition-all"
      >
        <NuxtLink
          v-for="link in navLinks"
          :key="link.id"
          :to="link.to"
          class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100"
          @click="menuOpen = false"
        >
          <span class="material-symbols-outlined">
            {{ link.icon }}
          </span>
          {{ link.label }}
        </NuxtLink>
      </nav>
    </transition>
  </header>

  <!-- ================= LOGIN MODAL ================= -->
<transition name="fade">
  <div
    v-if="loginOpen"
    class="fixed inset-0 z-[100]
           bg-black/50 backdrop-blur-sm
           flex items-center justify-center px-4"
    @click="closeLogin"
  >
    <div
      class="w-full max-w-md bg-white rounded-2xl
             shadow-2xl p-8 relative"
      role="dialog"
      aria-modal="true"
      aria-labelledby="login-title"
      @click.stop
    >
      <!-- Close -->
      <button
        type="button"
        class="absolute top-4 right-4 text-gray-400
               hover:text-red-500 transition"
        aria-label="Close login"
        @click="closeLogin"
      >
        <span class="material-symbols-outlined">close</span>
      </button>

      <!-- Title -->
      <div class="text-center mb-6">
        <span class="material-symbols-outlined text-4xl text-yellow-500">
          lock
        </span>
        <h2
          id="login-title"
          class="text-2xl font-bold mt-2"
        >
          ចូលគណនី
        </h2>
        <p class="text-sm text-gray-500">
          សូមបញ្ចូលព័ត៌មានគណនី
        </p>
      </div>

      <!-- Form -->
      <form class="space-y-5" @submit.prevent="submitLogin">

        <!-- Email / Phone -->
        <div>
          <label
            for="email"
            class="block text-sm font-semibold text-gray-700"
          >
            អ៊ីមែល / ទូរស័ព្ទ
          </label>
          <input
            id="email"
            v-model.trim="loginForm.email"
            type="text"
            autocomplete="username"
            required
            class="w-full mt-2 px-4 py-3 border rounded-xl
                   focus:ring-2 focus:ring-yellow-500
                   focus:border-yellow-500
                   outline-none transition"
            placeholder="example@email.com"
          />
        </div>

        <!-- Password -->
        <div>
          <label
            for="password"
            class="block text-sm font-semibold text-gray-700"
          >
            ពាក្យសម្ងាត់
          </label>
          <input
            id="password"
            v-model="loginForm.password"
            type="password"
            autocomplete="current-password"
            required
            minlength="6"
            class="w-full mt-2 px-4 py-3 border rounded-xl
                   focus:ring-2 focus:ring-yellow-500
                   focus:border-yellow-500
                   outline-none transition"
            placeholder="********"
          />
        </div>

        <!-- Submit -->
        <button
          type="submit"
          class="w-full py-3 bg-gradient-to-r
                 from-yellow-500 to-yellow-600
                 hover:from-yellow-600 hover:to-yellow-700
                 text-black font-bold rounded-xl shadow-lg
                 transition active:scale-95"
        >
          🔐 Login
        </button>

        <!-- Register -->
        <p class="text-center text-sm text-gray-500">
          មិនទាន់មានគណនី?
          <button
            type="button"
            class="text-yellow-600 font-bold hover:underline"
            @click="openRegisterFromLogin"
          >
            បង្កើតថ្មី
          </button>
        </p>

      </form>
    </div>
  </div>
</transition>

<!-- ================= REGISTER MODAL ================= -->
<transition name="fade">
  <div
    v-if="registerOpen"
    class="fixed inset-0 z-[100]
           bg-black/50 backdrop-blur-sm
           flex items-center justify-center px-4"
    @click="closeRegister"
  >
    <div
      class="w-full max-w-md bg-white rounded-2xl
             shadow-2xl p-8 relative"
      role="dialog"
      aria-modal="true"
      @click.stop
    >
      <!-- Close -->
      <button
        type="button"
        class="absolute top-4 right-4 text-gray-400 hover:text-red-500"
        @click="closeRegister"
      >
        <span class="material-symbols-outlined">close</span>
      </button>

      <!-- Title -->
      <div class="text-center mb-6">
        <span class="material-symbols-outlined text-4xl text-yellow-500">
          person_add
        </span>
        <h2 class="text-2xl font-bold mt-2">បង្កើតគណនី</h2>
        <p class="text-sm text-gray-500">
          សូមបំពេញព័ត៌មានដើម្បីបង្កើតគណនីថ្មី
        </p>
      </div>

      <!-- Error -->
      <p
        v-if="error"
        class="mb-4 text-sm text-red-500 text-center"
      >
        {{ error }}
      </p>

      <!-- Form -->
      <form class="space-y-2" @submit.prevent="submitRegister">

        <!-- Name -->
        <div>
          <label class="block text-sm font-semibold">
            ឈ្មោះពេញ
          </label>
          <input
            v-model.trim="form.name"
            required
            class="w-full mt-2 px-4 py-3 border rounded-xl
                   focus:ring-2 focus:ring-yellow-500
                   focus:border-yellow-500
                   outline-none transition"
            placeholder="បញ្ចូលឈ្មោះ"
          />
        </div>

        <!-- Email -->
        <div>
          <label class="block text-sm font-semibold">
            អ៊ីមែល
          </label>
          <input
            v-model.trim="form.email"
            type="email"
            required
            class="w-full mt-2 px-4 py-3 border rounded-xl
                   focus:ring-2 focus:ring-yellow-500
                   focus:border-yellow-500
                   outline-none transition"
            placeholder="example@email.com"
          />
        </div>

        <!-- Phone -->
        <div>
          <label class="block text-sm font-semibold">
            លេខទូរស័ព្ទ
          </label>
          <input
            v-model.trim="form.phone"
            type="tel"
            required
            class="w-full mt-2 px-4 py-3 border rounded-xl
                   focus:ring-2 focus:ring-yellow-500
                   focus:border-yellow-500
                   outline-none transition"
            placeholder="0XX XXX XXX"
            />
        </div>

        <!-- Password -->
        <div>
          <label class="block text-sm font-semibold">
            ពាក្យសម្ងាត់
          </label>
          <div class="relative">
            <input
              v-model="form.password"
              :type="showPassword ? 'text' : 'password'"
              minlength="6"
              required
              class="w-full mt-2 px-4 py-3 border rounded-xl
                   focus:ring-2 focus:ring-yellow-500
                   focus:border-yellow-500
                   outline-none transition"
              placeholder="********"
            />
            <button
              type="button"
              class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              @click="showPassword = !showPassword"
            >
              <span class="material-symbols-outlined text-sm">
                {{ showPassword ? 'visibility_off' : 'visibility' }}
              </span>
            </button>
          </div>
        </div>

        <!-- Confirm -->
        <div>
          <label class="block text-sm font-semibold">
            បញ្ជាក់ពាក្យសម្ងាត់
          </label>
          <div class="relative">
            <input
              v-model="form.confirmPassword"
              :type="showConfirm ? 'text' : 'password'"
              minlength="6"
              required
              class="w-full mt-2 px-4 py-3 border rounded-xl
                   focus:ring-2 focus:ring-yellow-500
                   focus:border-yellow-500
                   outline-none transition"
              placeholder="********"
            />
            <button
              type="button"
              class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              @click="showConfirm = !showConfirm"
            >
              <span class="material-symbols-outlined text-sm">
                {{ showConfirm ? 'visibility_off' : 'visibility' }}
              </span>
            </button>
          </div>
        </div>

        <!-- Submit -->
        <button
          type="submit"
          :disabled="loading"
          class="w-full py-3 bg-gradient-to-r
                 from-yellow-500 to-yellow-600
                 hover:from-yellow-600 hover:to-yellow-700
                 text-black font-bold rounded-xl shadow-lg
                 transition active:scale-95
                 disabled:opacity-50"
        >
          {{ loading ? 'កំពុងបង្កើត...' : 'បង្កើតគណនី' }}
        </button>

        <!-- Switch to login -->
        <p class="text-center text-sm text-gray-500">
          មានគណនីរួចហើយ?
          <button
            type="button"
            class="text-yellow-600 font-bold hover:underline"
            @click="openLoginFromRegister"
          >
            ចូលគណនី
          </button>
        </p>

      </form>
    </div>
  </div>
</transition>


</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.25s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.input {
  @apply w-full mt-2 px-4 py-3 border rounded-xl
         focus:ring-2 focus:ring-yellow-500
         focus:border-yellow-500
         outline-none transition;
}
</style>
