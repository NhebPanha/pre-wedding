<script setup lang="ts">
import { ref, computed, watch } from 'vue'

const invitationData = ref({
  groomName: '',
  brideName: '',
  message: '',
  date: '',
  time: '',
  location: '',
  theme: 'gold',
  customColor: '#D4AF37' 
});

const themes = [
  { id: 'gold', name: 'Traditional', color: '#D4AF37', icon: 'grade' },
  { id: 'pink', name: 'Modern Pink', color: '#F8BBD0', icon: 'eco' },
  { id: 'blue', name: 'Classic Blue', color: '#1A237E', icon: 'stars' },
  { id: 'custom', name: 'Custom', color: '#FF6B6B', icon: 'palette' }, 
];

const guestName = ref('');
const guestList = ref<{name: string}[]>([]);

const addGuest = () => {
  if (guestName.value) {
    guestList.value.push({ name: guestName.value });
    guestName.value = '';
  }
};


const currentThemeColor = computed(() => {
  if (invitationData.value.theme === 'custom') {
    return invitationData.value.customColor;
  }
  const theme = themes.find(t => t.id === invitationData.value.theme);
  return theme ? theme.color : '#D4AF37';
});


const lighterColor = computed(() => {
  return adjustColor(currentThemeColor.value, 40);
});

const darkerColor = computed(() => {
  return adjustColor(currentThemeColor.value, -20);
});


function adjustColor(color: string, percent: number) {
  const num = parseInt(color.replace("#", ""), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = (num >> 8 & 0x00FF) + amt;
  const B = (num & 0x0000FF) + amt;
  
  return "#" + (
    0x1000000 +
    (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
    (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
    (B < 255 ? (B < 1 ? 0 : B) : 255)
  )
  .toString(16)
  .slice(1);
}


const isLightColor = computed(() => {
  const color = currentThemeColor.value.replace("#", "");
  const r = parseInt(color.substr(0, 2), 16);
  const g = parseInt(color.substr(2, 2), 16);
  const b = parseInt(color.substr(4, 2), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128;
});

watch(() => invitationData.value.customColor, (newColor) => {
  if (invitationData.value.theme !== 'custom') {
    invitationData.value.theme = 'custom';
  }
});
</script>

<template>
  <div class="min-h-screen font-noto py-10 px-4" :style="{ backgroundColor: lighterColor + '10' }">
    
    <div class="text-center mb-10">
      <h1 class="text-3xl md:text-4xl font-moul mb-2" :style="{ color: currentThemeColor }">រចនាលិខិតអញ្ជើញឌីជីថល</h1>
      <div class="flex justify-center mb-2">
        <span class="material-symbols-outlined" :style="{ color: currentThemeColor }">diamond</span>
      </div>
      <p class="text-xs text-gray-500 max-w-md mx-auto">
        រូបភាព ឈ្មោះ និងព័ត៌មានផ្សេងៗ នឹងបង្ហាញនៅលើលិខិតអញ្ជើញឌីជីថលរបស់អ្នកដោយស្វ័យប្រវត្តិ
      </p>
    </div>

    <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
      
      <div class="space-y-6">
        
        <div class="bg-white rounded-xl shadow-sm border overflow-hidden" :style="{ borderColor: lighterColor }">
          <div class="p-1" :style="{ background: `linear-gradient(to right, ${currentThemeColor}40, ${currentThemeColor}10)` }"></div>
          <div class="p-6">
            <div class="flex items-center gap-2 mb-6">
              <span class="material-symbols-outlined" :style="{ color: currentThemeColor }">favorite</span>
              <h3 class="font-moul text-lg" :style="{ color: currentThemeColor }">ព័ត៌មានកូនកំលោះ និងកូនក្រមុំ</h3>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="text-xs text-gray-400 mb-1 block">កូនកំលោះ</label>
                <input 
                  v-model="invitationData.groomName" 
                  placeholder="ឈ្មោះកូនកំលោះ" 
                  class="w-full border-b border-gray-200 py-2 outline-none transition" 
                  :style="{ '--tw-border-opacity': 1, '--tw-ring-color': currentThemeColor }"
                  :class="{ 'focus:border-current': true }"
                  :data-color="currentThemeColor"
                />
              </div>
              <div>
                <label class="text-xs text-gray-400 mb-1 block">កូនក្រមុំ</label>
                <input 
                  v-model="invitationData.brideName" 
                  placeholder="ឈ្មោះកូនក្រមុំ" 
                  class="w-full border-b border-gray-200 py-2 outline-none transition" 
                  :style="{ '--tw-border-opacity': 1, '--tw-ring-color': currentThemeColor }"
                  :class="{ 'focus:border-current': true }"
                  :data-color="currentThemeColor"
                />
              </div>
            </div>
            <div class="mt-4">
              <label class="text-xs text-gray-400 mb-1 block">ពាក្យស្លោក ឬការអញ្ជើញ</label>
              <input 
                v-model="invitationData.message" 
                placeholder="រៀបរាប់ពីអ្វីមួយដែលអ្នកចង់ប្រាប់ភ្ញៀវ..." 
                class="w-full border-b border-gray-200 py-2 outline-none transition" 
                :style="{ '--tw-border-opacity': 1, '--tw-ring-color': currentThemeColor }"
                :class="{ 'focus:border-current': true }"
                :data-color="currentThemeColor"
              />
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm border overflow-hidden" :style="{ borderColor: lighterColor }">
          <div class="p-1" :style="{ background: `linear-gradient(to right, ${currentThemeColor}40, ${currentThemeColor}10)` }"></div>
          <div class="p-6">
            <div class="flex items-center gap-2 mb-6">
              <span class="material-symbols-outlined" :style="{ color: currentThemeColor }">calendar_today</span>
              <h3 class="font-moul text-lg" :style="{ color: currentThemeColor }">ព័ត៌មានកម្មវិធី</h3>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <input 
                type="date" 
                v-model="invitationData.date" 
                class="border border-gray-100 rounded p-2 text-sm transition"
                :style="{ '--tw-ring-color': currentThemeColor }"
                :class="{ 'focus:ring-1': true, 'focus:border-transparent': true }"
                :data-color="currentThemeColor"
              />
              <input 
                type="time" 
                v-model="invitationData.time" 
                class="border border-gray-100 rounded p-2 text-sm transition"
                :style="{ '--tw-ring-color': currentThemeColor }"
                :class="{ 'focus:ring-1': true, 'focus:border-transparent': true }"
                :data-color="currentThemeColor"
              />
            </div>
            <input 
              v-model="invitationData.location" 
              placeholder="ទីតាំងប្រារព្ធពិធី (Google Maps Link)" 
              class="w-full border-b border-gray-200 py-2 mt-4 outline-none text-sm transition"
              :style="{ '--tw-ring-color': currentThemeColor }"
              :class="{ 'focus:border-current': true }"
              :data-color="currentThemeColor"
            />
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm border overflow-hidden" :style="{ borderColor: lighterColor }">
          <div class="p-1" :style="{ background: `linear-gradient(to right, ${currentThemeColor}40, ${currentThemeColor}10)` }"></div>
          <div class="p-6">
            <div class="flex items-center gap-2 mb-6">
              <span class="material-symbols-outlined" :style="{ color: currentThemeColor }">palette</span>
              <h3 class="font-moul text-lg" :style="{ color: currentThemeColor }">ជ្រើសរើសម៉ូដរចនា</h3>
            </div>
            <div class="flex gap-4">
              <div 
                v-for="t in themes" 
                :key="t.id" 
                @click="invitationData.theme = t.id"
                :class="[invitationData.theme === t.id ? 'ring-2' : 'border-transparent']"
                class="flex-1 cursor-pointer border-2 rounded-xl p-4 text-center transition-all bg-gray-50"
                :style="invitationData.theme === t.id ? { 
                  borderColor: currentThemeColor,
                  
                } : {}"
              >
                <div 
                  class="w-12 h-12 mx-auto rounded-lg mb-2 flex items-center justify-center text-white"
                  :style="{ 
                    backgroundColor: t.id === 'custom' ? invitationData.customColor : t.color
                  }"
                >
                  <span class="material-symbols-outlined">{{ t.icon }}</span>
                </div>
                <p class="text-[10px] font-bold">{{ t.name }}</p>
                <div 
                  class="mt-1 w-2 h-2 mx-auto rounded-full"
                  :style="{ 
                    backgroundColor: invitationData.theme === t.id ? currentThemeColor : '#D1D5DB'
                  }"
                ></div>
              </div>
<<<<<<< HEAD
            </section>
            <section class="premium-card">
              <div class="kbach-ornament"></div>
              <div class="p-10">
                <div class="flex items-center gap-4 mb-10">
                  <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span class="material-symbols-outlined">event_available</span>
                  </div>
                  <h2 class="text-2xl font-moul">ព័ត៌មានកម្មវិធី</h2>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  <div class="flex flex-col">
                    <label class="input-label">កាលបរិច្ឆេទប្រារព្ធពិធី</label>
                    <input v-model="invitationData.date" class="minimal-input" type="date" />
                  </div>
                  <div class="flex flex-col">
                    <label class="input-label">ម៉ោងចាប់ផ្ដើម</label>
                    <input v-model="invitationData.time" class="minimal-input" type="time" />
                  </div>
                </div>
              </div>
            </section>
            <section class="premium-card">
              <div class="kbach-ornament"></div>
              <div class="p-10">
                <div class="flex items-center gap-4 mb-10">
                  <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span class="material-symbols-outlined">auto_fix_high</span>
                  </div>
                  <h2 class="text-2xl font-moul">ជ្រើសរើសម៉ូដរចនា</h2>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  <label v-for="theme in themes" :key="theme.id" class="relative cursor-pointer group">
                    <input type="radio" v-model="invitationData.theme" :value="theme.id" class="peer sr-only" />
                    <div
                      class="p-2 border-2 border-transparent peer-checked:border-primary rounded-2xl transition-all duration-300">
                      <div
                        :class="['w-full aspect-[4/5] bg-gradient-to-br rounded-xl shadow-lg flex items-center justify-center group-hover:scale-105 transition-transform', theme.gradient]">
                        <span class="text-white/60 material-symbols-outlined text-5xl">{{ theme.icon }}</span>
                      </div>
                      <div class="mt-4 text-center">
                        <span class="text-[12px] font-bold text-charcoal/80 uppercase tracking-tighter block">{{
                          theme.name }}</span>
                        <div class="w-4 h-4 rounded-full mx-auto mt-2" :style="{ backgroundColor: theme.color }"></div>
                      </div>
                    </div>
                  </label>
                </div>
=======
            </div>
            
            
            <div v-if="invitationData.theme === 'custom'" class="mt-4 p-4 bg-gray-50 rounded-lg">
              <div class="flex items-center justify-between mb-2">
                <label class="text-sm font-medium">ជ្រើសរើសពណ៌ផ្ទាល់ខ្លួន</label>
                <span class="text-xs text-gray-500">{{ invitationData.customColor }}</span>
              </div>
              <div class="flex items-center gap-4">
                <input 
                  type="color" 
                  v-model="invitationData.customColor" 
                  class="w-12 h-12 cursor-pointer rounded-lg border-none"
                />
                <input 
                  type="text" 
                  v-model="invitationData.customColor" 
                  placeholder="#HEX"
                  class="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm"
                />
>>>>>>> origin/develop2
              </div>
              <div class="mt-3 grid grid-cols-5 gap-2">
                <div 
                  v-for="color in [
                    '#D4AF37', '#F8BBD0', '#1A237E', '#4CAF50', '#FF6B6B',
                    '#9C27B0', '#2196F3', '#FF9800', '#795548', '#607D8B'
                  ]" 
                  :key="color"
                  @click="invitationData.customColor = color"
                  class="w-8 h-8 rounded-lg cursor-pointer border-2 border-white shadow-sm"
                  :style="{ backgroundColor: color }"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm border overflow-hidden" :style="{ borderColor: lighterColor }">
          <div class="p-1" :style="{ background: `linear-gradient(to right, ${currentThemeColor}40, ${currentThemeColor}10)` }"></div>
          <div class="p-6 text-center">
            <div class="flex items-center justify-center gap-2 mb-4">
              <span class="material-symbols-outlined" :style="{ color: currentThemeColor }">group</span>
              <h3 class="font-moul text-lg" :style="{ color: currentThemeColor }">បញ្ជីរាយនាមភ្ញៀវ</h3>
            </div>
            
            <div class="border-2 border-dashed border-gray-200 rounded-xl py-8 px-4 mb-4">
              <span class="material-symbols-outlined text-gray-300 text-4xl mb-2">description</span>
              <p class="text-sm font-bold">ទាញបញ្ចូលឯកសារ Excel</p>
              <p class="text-[10px] text-gray-400">អ្នកអាចបញ្ចូលឈ្មោះភ្ញៀវបានច្រើនក្នុងពេលតែមួយ</p>
            </div>

            <div class="flex gap-2">
              <input 
                v-model="guestName" 
                @keyup.enter="addGuest" 
                placeholder="បញ្ចូលឈ្មោះភ្ញៀវ..." 
                class="flex-1 bg-gray-50 border-none rounded-lg px-4 py-2 text-sm transition"
                :style="{ '--tw-ring-color': currentThemeColor }"
                :class="{ 'focus:ring-1': true, 'focus:border-transparent': true }"
                :data-color="currentThemeColor"
              />
              <button 
                @click="addGuest" 
                class="p-2 rounded-lg flex items-center justify-center transition"
                :style="{ 
                  backgroundColor: currentThemeColor,
                  color: isLightColor ? '#000000' : '#FFFFFF'
                }"
              >
                <span class="material-symbols-outlined">add</span>
              </button>
            </div>
          </div>
        </div>

<<<<<<< HEAD
          <div class="lg:col-span-5 relative">
            <div class="sticky top-32 flex flex-col items-center">
              <div class="mb-8 flex flex-col items-center">
                <span class="text-[11px] font-bold uppercase tracking-[0.5em] text-primary mb-3">Live Preview</span>
                <div class="flex gap-1.5">
                  <div class="w-1 h-1 rounded-full bg-primary/40"></div>
                  <div class="w-12 h-[1px] bg-primary/40 mt-0.5"></div>
                  <div class="w-1 h-1 rounded-full bg-primary/40"></div>
                </div>
              </div>
              <div class="phone-mockup">
                <div class="phone-notch"></div>
                <div class="phone-screen">
                  <div class="h-full w-full flex flex-col bg-[#FAF9F6] relative overflow-hidden">
                    <div
                      class="h-[42%] bg-cover bg-center relative bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuBPPYMSOMVkJHHp1vJLoMu5B4AGxxyLJ-15uKW-jpg85o6p8sELpzYOFqu0DjmzAkc990zJgmaByZipi5XhF--AdWGpl_RLUowOg-rKy0q_ehwP0jocH6r2-fx4P93zbaKcd-_zP_zerkdu3RIvhh_ddaxMZleyAZs9Kxd_ZvPy1uQ76XoVPhrYj_ioi1RcamxHG_c4UCYTtv5FPaMmodQAqEkMOUCLD3I4ULy-8Avbuv07KvRbvUDKo6IyfgcmhAxo4V4vz7vWug')]">
                      <div class="absolute inset-0 bg-gradient-to-t from-[#FAF9F6] via-transparent to-transparent">
                      </div>
                      <div class="absolute top-12 left-0 right-0 flex justify-center">
                        <div
                          class="w-14 h-14 border border-white/40 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md">
                          <span class="material-symbols-outlined text-white text-2xl fill-icon">favorite</span>
                        </div>
                      </div>
                    </div>
                    <div class="flex-1 px-8 pb-10 flex flex-col justify-between text-center relative">
                      <div class="space-y-4 pt-4">
                        <h4 class="text-2xl font-moul text-royal-blue leading-relaxed">
                          {{ invitationData.groomName || 'វណ្ណៈ' }} & {{ invitationData.brideName || 'សុម៉ាលី' }}
                        </h4>
                        <div class="flex items-center justify-center gap-4">
                          <div class="h-[1px] w-6 bg-primary/40"></div>
                          <span class="text-[10px] uppercase tracking-[0.3em] font-bold text-primary">Wedding
                            Party</span>
                          <div class="h-[1px] w-6 bg-primary/40"></div>
                        </div>
                        <p class="text-[12px] leading-relaxed italic text-charcoal/70 px-2 font-light">
                          "{{ invitationData.message || 'សេចក្តីស្រលាញ់ដែលផ្តើមចេញពីបេះដូង...' }}"
                        </p>
                      </div>
                      <div class="space-y-6">
                        <div class="bg-primary/5 py-4 rounded-2xl border border-primary/10">
                          <p class="text-[14px] font-bold text-royal-blue mb-1">
                            {{ invitationData.date || '២៤ ធ្នូ ២០២៤' }} | {{ invitationData.time || '១៦:៣០' }}
                          </p>
                          <p class="text-[10px] uppercase tracking-widest text-charcoal/60">សណ្ឋាគារ រ៉េស៊ីដង់ សុខា</p>
                        </div>
                        <button
                          class="w-full py-4 bg-primary text-white text-[11px] font-bold rounded-full shadow-lg">ឆ្លើយតបការអញ្ជើញ</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer class="mt-20 py-20 px-6 bg-royal-blue text-white relative overflow-hidden">
      <div class="romduol-pattern opacity-10"></div>
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
        <div class="flex items-center gap-4">
          <div class="w-14 h-14 rounded-full border border-primary/30 flex items-center justify-center text-primary">
            <span class="material-symbols-outlined text-3xl">camera_alt</span>
          </div>
          <div>
            <p class="text-2xl font-moul text-primary">ETERNAL KHMER</p>
            <p class="text-[10px] uppercase tracking-[0.4em] text-white/50">Professional Wedding Services</p>
=======
      </div>

      <div class="flex flex-col items-center">
        <p class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Live Preview</p>
        
        <div class="w-[300px] h-[600px] bg-black rounded-[40px] p-3 shadow-2xl relative border-[6px] border-gray-800">
          <div class="bg-white h-full w-full rounded-[32px] overflow-hidden flex flex-col relative">
            
            <div class="h-1/2 bg-gray-200 relative overflow-hidden">
              <img src="https://i.pinimg.com/1200x/7a/fa/f6/7afaf668f433e43ece6a3a5ca730f42e.jpg" class="object-cover w-full h-full opacity-80" />
              <div class="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
              <div class="absolute top-4 right-4" :style="{ color: currentThemeColor }">
                <span class="material-symbols-outlined">favorite</span>
              </div>
            </div>

            <div class="p-6 text-center flex-1 flex flex-col justify-center -mt-10 relative z-10">
              <h2 
                class="font-moul text-xl leading-relaxed"
                :style="{ color: darkerColor }"
              >
                {{ invitationData.groomName || 'កូនកំលោះ' }} & {{ invitationData.brideName || 'កូនក្រមុំ' }}
              </h2>
              <div class="h-px w-20 mx-auto my-3" :style="{ backgroundColor: currentThemeColor }"></div>
              <p class="text-[10px] uppercase tracking-tighter text-gray-400 font-bold mb-4">Wedding Party</p>
              <p class="text-[11px] text-gray-600 italic leading-relaxed mb-6 px-4">
                "{{ invitationData.message || 'សូមគោរពអញ្ជើញលោកអ្នកចូលរួមក្នុងកម្មវិធីដ៏វិសេសវិសាលរបស់យើងខ្ញុំ' }}"
              </p>
              
              <div 
                class="rounded-xl p-3 mb-6"
                :style="{ 
                  backgroundColor: currentThemeColor + '10',
                  border: `1px solid ${currentThemeColor}20`
                }"
              >
                <p 
                  class="text-xs font-bold"
                  :style="{ color: currentThemeColor }"
                >
                  {{ invitationData.date || '២៤ ធ្នូ ២០២៦' }}
                </p>
                <p class="text-[9px] text-gray-400">ម៉ោង {{ invitationData.time || '០៤:០០ ល្ងាច' }}</p>
              </div>

              <button 
                class="text-[11px] font-bold py-3 px-8 rounded-full shadow-lg mt-auto transition hover:opacity-90"
                :style="{ 
                  backgroundColor: currentThemeColor,
                  color: isLightColor ? '#000000' : '#FFFFFF',
                  boxShadow: `0 10px 25px ${currentThemeColor}40`
                }"
              >
                អញ្ជើញចូលរួម
              </button>
            </div>
>>>>>>> origin/develop2
          </div>
          <div class="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-800 rounded-b-xl"></div>
        </div>

        <div class="mt-6 flex bg-white rounded-full shadow-sm p-1 border border-gray-100">
          <button 
            class="p-2 px-4 rounded-full bg-gray-50 transition"
            :style="{ color: currentThemeColor }"
          >
            <span class="material-symbols-outlined">smartphone</span>
          </button>
          <button class="p-2 px-4 rounded-full text-gray-300">
            <span class="material-symbols-outlined">tablet</span>
          </button>
          <button class="p-2 px-4 rounded-full text-gray-300">
            <span class="material-symbols-outlined">share</span>
          </button>
        </div>
      </div>
    </div>

    <div class="max-w-6xl mx-auto mt-12 grid grid-cols-2 gap-4">
      <button 
        class="py-4 rounded-xl font-moul border-2 bg-white hover:opacity-90 transition"
        :style="{ 
          borderColor: currentThemeColor,
          color: currentThemeColor
        }"
      >
        បោះបង់
      </button>
      <button 
        class="py-4 rounded-xl font-moul shadow-xl transition hover:opacity-90"
        :style="{ 
          backgroundColor: currentThemeColor,
          color: isLightColor ? '#000000' : '#FFFFFF',
          boxShadow: `0 10px 25px ${currentThemeColor}40`
        }"
      >
        បង្កើត និងរក្សាទុក
      </button>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Moul&family=Noto+Sans+Khmer:wght@400;700&display=swap');

.font-moul { font-family: 'Moul', cursive; }
.font-noto { font-family: 'Noto Sans Khmer', sans-serif; }


input:focus {
  border-color: var(--focus-color) !important;
  --tw-ring-color: var(--focus-color) !important;
}


input[data-color] {
  --focus-color: attr(data-color);
}
</style>