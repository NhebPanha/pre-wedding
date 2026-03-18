<script setup lang="ts">
import { reactive, ref } from 'vue'

/* ===================== State ===================== */
const form = reactive({
  groom: '',
  bride: '',
  phone: '',
  telegram: '',
  date: '',
  location: '',
  traditional: 1,
  modern: 1,
  color: 'gold',
  images: [] as File[]
})

/* ===================== File Upload ===================== */
const fileInput = ref<HTMLInputElement | null>(null)
const openFilePicker = () => fileInput.value?.click()

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (!target.files) return
  form.images = Array.from(target.files)
}

/* ===================== Submit ===================== */
const submitForm = () => {
  const payload = { ...form, imageCount: form.images.length }
  console.log('SUBMIT 👉', payload)
}
</script>

<template>
  <div class="min-h-screen bg-bgLight text-gray-800 font-sans">

    <!-- Warm gradient background matching screenshot -->
    <div class="fixed inset-0 -z-10" style="background: linear-gradient(135deg, #e8d5b7 0%, #d4b896 30%, #c9a87c 60%, #b8956a 100%);" />

    <main class="mx-auto max-w-2xl px-4 py-8 pb-8">

      <!-- Header -->
      <header class="mb-6 text-center">
        <!-- Lotus / dove icon -->
        <div class="flex justify-center mb-2">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 8 C16 12, 10 14, 10 20 C10 26, 14 30, 20 32 C26 30, 30 26, 30 20 C30 14, 24 12, 20 8Z" fill="#8B6914" opacity="0.8"/>
            <path d="M20 12 C17 16, 13 17, 13 21 C13 25, 16 28, 20 30 C24 28, 27 25, 27 21 C27 17, 23 16, 20 12Z" fill="#C4922A"/>
            <circle cx="20" cy="21" r="3" fill="#8B6914"/>
          </svg>
        </div>
        <h1 class="text-2xl font-bold text-amber-900" style="font-family: 'Noto Serif Khmer', 'Khmer OS Muol Light', serif; letter-spacing: 0.01em;">
          ព័ត៌មានសម្រាប់ការថតរូប Pre-Wedding
        </h1>
        <p class="mt-1 text-xs text-amber-800/70" style="font-family: 'Noto Sans Khmer', serif;">
          សូមបំពេញព័ត៌មានលម្អិតដើម្បីទទួលបានបទពិសោធន៍ល្អបំផុត
        </p>
      </header>

      <!-- Step Progress Bar -->
      <div class="mb-6 flex items-center justify-center gap-0">

        <!-- Step 1 - active -->
        <div class="flex flex-col items-center">
          <div class="w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md" style="background: #C4922A;">
            <svg width="18" height="18" fill="white" viewBox="0 0 24 24"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
          </div>
          <span class="mt-1 text-[9px] font-bold text-amber-900" style="font-family: 'Noto Sans Khmer', serif;">ព័ត៌មានផ្ទាល់ខ្លួន</span>
        </div>

        <div class="h-0.5 w-12 bg-amber-700/50 mb-4" />

        <!-- Step 2 - active -->
        <div class="flex flex-col items-center">
          <div class="w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md" style="background: #C4922A;">
            <svg width="18" height="18" fill="white" viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM7 11h5v5H7z"/></svg>
          </div>
          <span class="mt-1 text-[9px] font-bold text-amber-900" style="font-family: 'Noto Sans Khmer', serif;">ការជ្រើសរើស</span>
        </div>

        <div class="h-0.5 w-12 bg-amber-700/30 mb-4" />

        <!-- Step 3 - inactive -->
        <div class="flex flex-col items-center">
          <div class="w-10 h-10 rounded-full flex items-center justify-center shadow-md" style="background: #e8d5b7; border: 2px solid #C4922A;">
            <svg width="18" height="18" fill="#C4922A" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          </div>
          <span class="mt-1 text-[9px] text-amber-700/60" style="font-family: 'Noto Sans Khmer', serif;">Outfit & សម្លៀកបំពាក់</span>
        </div>

        <div class="h-0.5 w-12 bg-amber-700/20 mb-4" />

        <!-- Step 4 - inactive -->
        <div class="flex flex-col items-center">
          <div class="w-10 h-10 rounded-full flex items-center justify-center shadow-md" style="background: #e8d5b7; border: 2px solid #C4922A80;">
            <svg width="18" height="18" fill="#C4922A80" viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
          </div>
          <span class="mt-1 text-[9px] text-amber-700/40" style="font-family: 'Noto Sans Khmer', serif;">បញ្ជាក់</span>
        </div>

      </div>

      <!-- Main Card -->
      <section class="rounded-2xl p-6 shadow-xl" style="background: rgba(255,255,255,0.88); backdrop-filter: blur(12px);">

        <form class="space-y-8" @submit.prevent="submitForm">

          <!-- ១. Personal Details -->
          <fieldset>
            <legend class="mb-4 flex items-center gap-2">
              <svg width="18" height="18" fill="#C4922A" viewBox="0 0 24 24"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
              <span class="font-bold text-amber-900 text-sm" style="font-family: 'Noto Serif Khmer', serif;">
                ជំហានទី ១៖ ព័ត៌មានផ្ទាល់ខ្លួន (Personal Details)
              </span>
            </legend>

            <div class="grid grid-cols-2 gap-x-4 gap-y-4">
              <!-- Groom -->
              <div>
                <label class="block text-xs font-semibold text-amber-800 mb-1" style="font-family: 'Noto Sans Khmer', serif;">ឈ្មោះកូនកំលោះ</label>
                <input
                  v-model.trim="form.groom"
                  placeholder="បញ្ចូលឈ្មោះ..."
                  class="w-full rounded-lg border border-amber-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition placeholder:text-gray-300"
                  style="font-family: 'Noto Sans Khmer', serif;"
                />
              </div>
              <!-- Bride -->
              <div>
                <label class="block text-xs font-semibold text-amber-800 mb-1" style="font-family: 'Noto Sans Khmer', serif;">ឈ្មោះកូនក្រមុំ</label>
                <input
                  v-model.trim="form.bride"
                  placeholder="បញ្ចូលឈ្មោះ..."
                  class="w-full rounded-lg border border-amber-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition placeholder:text-gray-300"
                  style="font-family: 'Noto Sans Khmer', serif;"
                />
              </div>
              <!-- Phone -->
              <div>
                <label class="block text-xs font-semibold text-amber-800 mb-1" style="font-family: 'Noto Sans Khmer', serif;">លេខទូរស័ព្ទទំនាក់ទំនង</label>
                <input
                  v-model.trim="form.phone"
                  placeholder="0XX XXX XXX"
                  class="w-full rounded-lg border border-amber-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition placeholder:text-gray-300"
                />
              </div>
              <!-- Telegram -->
              <div>
                <label class="block text-xs font-semibold text-amber-800 mb-1">តេឡេក្រាម (TELEGRAM)</label>
                <input
                  v-model.trim="form.telegram"
                  placeholder="@username"
                  class="w-full rounded-lg border border-amber-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition placeholder:text-gray-300"
                />
              </div>
            </div>
          </fieldset>

          <hr class="border-amber-100" />

          <!-- ២. Session Selection -->
          <fieldset>
            <legend class="mb-4 flex items-center gap-2">
              <svg width="18" height="18" fill="#C4922A" viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM7 11h5v5H7z"/></svg>
              <span class="font-bold text-amber-900 text-sm" style="font-family: 'Noto Serif Khmer', serif;">
                ជំហានទី ២៖ ការជ្រើសរើសសម្ភារ (Session Selection)
              </span>
            </legend>

            <div class="grid grid-cols-2 gap-4">
              <!-- Date -->
              <div>
                <label class="block text-xs font-semibold text-amber-800 mb-1" style="font-family: 'Noto Sans Khmer', serif;">កាលបរិច្ឆេទ</label>
                <input
                  type="date"
                  v-model="form.date"
                  class="w-full rounded-lg border border-amber-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition text-gray-500"
                />
              </div>
              <!-- Location -->
              <div>
                <label class="block text-xs font-semibold text-amber-800 mb-1" style="font-family: 'Noto Sans Khmer', serif;">ប្រភេទទីតាំង (LOCATION)</label>
                <select
                  v-model="form.location"
                  class="w-full rounded-lg border border-amber-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition text-gray-600"
                  style="font-family: 'Noto Sans Khmer', serif;"
                >
                  <option value="">ប្រាសាទបុរាណ (Temple)</option>
                  <option value="sea">មាត់សមុទ្រ (Beach)</option>
                  <option value="studio">Studio</option>
                  <option value="garden">Garden</option>
                </select>
              </div>
            </div>
          </fieldset>

          <hr class="border-amber-100" />

          <!-- ៣. Outfit & Style -->
          <fieldset>
            <legend class="mb-4 flex items-center gap-2">
              <svg width="18" height="18" fill="#C4922A" viewBox="0 0 24 24"><path d="M12 3C10.34 3 9 4.34 9 6c0 1.31.84 2.41 2 2.83V11H7l-2 9h14l-2-9h-4V8.83c1.16-.42 2-1.52 2-2.83 0-1.66-1.34-3-3-3z"/></svg>
              <span class="font-bold text-amber-900 text-sm" style="font-family: 'Noto Serif Khmer', serif;">
                ជំហានទី ៣៖ ចំនួនសម្លៀកបំពាក់ (Outfit & Style)
              </span>
            </legend>

            <!-- Outfit counts -->
            <div class="mb-4">
              <p class="text-xs font-semibold text-amber-800 mb-3" style="font-family: 'Noto Sans Khmer', serif;">ចំនួនសម្លៀកបំពាក់</p>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-[11px] text-amber-700 mb-1 font-medium" style="font-family: 'Noto Sans Khmer', serif;">ប្រពៃណី</label>
                  <input
                    type="number"
                    min="0"
                    v-model.number="form.traditional"
                    class="w-full rounded-lg border border-amber-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition"
                  />
                </div>
                <div>
                  <label class="block text-[11px] text-amber-700 mb-1 font-medium" style="font-family: 'Noto Sans Khmer', serif;">សម័យ</label>
                  <input
                    type="number"
                    min="0"
                    v-model.number="form.modern"
                    class="w-full rounded-lg border border-amber-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition"
                  />
                </div>
              </div>
            </div>

            <!-- Color preference -->
            <div>
              <p class="text-xs font-semibold text-amber-800 mb-3" style="font-family: 'Noto Sans Khmer', serif;">ពណ៌ដែលចូលចិត្ត (PREFERRED COLORS)</p>
              <div class="flex gap-6">
                <label class="flex cursor-pointer items-center gap-2">
                  <input type="radio" value="gold" v-model="form.color" class="accent-amber-600" />
                  <span class="h-4 w-4 rounded-full border-2 border-amber-600" style="background: #C4922A;" />
                  <span class="text-xs font-medium text-amber-800" style="font-family: 'Noto Sans Khmer', serif;">ពណ៌មាស (Gold)</span>
                </label>
                <label class="flex cursor-pointer items-center gap-2">
                  <input type="radio" value="blue" v-model="form.color" class="accent-blue-500" />
                  <span class="h-4 w-4 rounded-full border-2 border-blue-400 bg-blue-400" />
                  <span class="text-xs font-medium text-amber-800" style="font-family: 'Noto Sans Khmer', serif;">ពណ៌ខៀវ (Blue)</span>
                </label>
                <label class="flex cursor-pointer items-center gap-2">
                  <input type="radio" value="red" v-model="form.color" class="accent-red-500" />
                  <span class="h-4 w-4 rounded-full border-2 border-red-400 bg-red-400" />
                  <span class="text-xs font-medium text-amber-800" style="font-family: 'Noto Sans Khmer', serif;">ពណ៌ក្រហម (Red)</span>
                </label>
              </div>
            </div>
          </fieldset>

          <hr class="border-amber-100" />

          <!-- ៤. Image Upload -->
          <fieldset>
            <legend class="mb-4 flex items-center gap-2">
              <svg width="18" height="18" fill="#C4922A" viewBox="0 0 24 24"><path d="M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 13c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3z"/></svg>
              <span class="font-bold text-amber-900 text-sm" style="font-family: 'Noto Serif Khmer', serif;">
                ជំហានទី ៤៖ រូបភាពគំរូ (Image Upload)
              </span>
            </legend>

            <div
              class="cursor-pointer rounded-xl border-2 border-dashed p-10 text-center transition hover:bg-amber-50"
              style="border-color: #C4922A40; background: rgba(196,146,42,0.04);"
              @click="openFilePicker"
            >
              <!-- Upload icon -->
              <div class="flex justify-center mb-3">
                <div class="w-12 h-12 rounded-full flex items-center justify-center" style="background: rgba(196,146,42,0.15);">
                  <svg width="24" height="24" fill="#C4922A" viewBox="0 0 24 24"><path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"/></svg>
                </div>
              </div>

              <p class="text-sm font-semibold text-amber-800 mb-1" style="font-family: 'Noto Sans Khmer', serif;">
                ទម្លាក់រូប ឬ Mood Board របស់អ្នកនៅទីនេះ
              </p>
              <p class="text-[11px] text-gray-400 mb-3" style="font-family: 'Noto Sans Khmer', serif;">
                អ្នកអាចបង្ហោះរូបភាពយោងតាមចំណូលចិត្ត ដើម្បីប្រឈមមុខនឹងស្ថានភាព<br>ដែលស្ថិតក្នុងស្ថានភាព
              </p>

              <button
                type="button"
                class="px-5 py-1.5 rounded-full text-xs font-bold border transition hover:opacity-80"
                style="border-color: #C4922A; color: #C4922A; font-family: 'Noto Sans Khmer', serif;"
                @click.stop="openFilePicker"
              >
                ជ្រើសរើសរូបភាព
              </button>

              <p v-if="form.images.length" class="mt-2 text-[11px] text-amber-600 font-medium">
                📸 {{ form.images.length }} file(s) selected
              </p>

              <input
                ref="fileInput"
                type="file"
                class="hidden"
                multiple
                accept="image/*"
                @change="handleFileChange"
              />
            </div>
          </fieldset>

          <!-- Actions -->
          <div class="flex gap-4 pt-2">
            <button
              type="button"
              class="flex-1 rounded-xl border py-3 text-sm font-bold transition hover:bg-amber-50"
              style="border-color: #C4922A; color: #C4922A; font-family: 'Noto Sans Khmer', serif;"
            >
              ← ត្រឡប់ក្រោយ
            </button>
            <button
              type="submit"
              class="flex-[1.5] rounded-xl py-3 text-sm font-bold text-white transition hover:opacity-90"
              style="background: #C4922A; font-family: 'Noto Sans Khmer', serif;"
            >
              បន្តទៅមុខទៀត →
            </button>
          </div>

        </form>
      </section>

      <!-- Footer -->
      <footer class="mt-6 text-center text-[9px] text-amber-800/50" style="font-family: 'Noto Sans Khmer', serif;">
        <p>© ព័ត៌មានទាំងអស់នឹងត្រូវបានរក្សាការសម្ងាត់</p>
        <p class="tracking-widest mt-1">© SENG & ETERNAL KHMER PHOTOGRAPHY. រក្សាសិទ្ធគ្រប់យ៉ាង</p>
      </footer>

    </main>
  </div>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Khmer:wght@400;600;700&family=Noto+Serif+Khmer:wght@700;900&display=swap');

input[type="date"]::-webkit-calendar-picker-indicator {
  opacity: 0.5;
  cursor: pointer;
}

select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='%23C4922A'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 32px;
}

input[type="radio"] {
  accent-color: #C4922A;
}
</style>