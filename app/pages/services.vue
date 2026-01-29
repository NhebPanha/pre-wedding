<script setup lang="ts">
const invitationData = ref({
  groomName: '',
  brideName: '',
  message: '',
  date: '',
  time: '',
  location: '',
  theme: 'gold'
});

const themes = [
  { id: 'gold', name: 'Traditional Gold', color: '#D4AF37', icon: 'auto_awesome', gradient: 'from-[#E6BE8A] to-[#D4AF37]' },
  { id: 'pink', name: 'Lotus Pink', color: '#FFB7C5', icon: 'eco', gradient: 'from-[#FFD1DC] to-[#FFB7C5]' },
  { id: 'blue', name: 'Royal Blue', color: '#002366', icon: 'stars', gradient: 'from-[#1A365D] to-[#002366]' },
];
</script>

<template>
  <div class="min-h-screen relative selection:bg-primary selection:text-white font-body bg-champagne text-charcoal">
    <div class="romduol-pattern"></div>

    <main class="py-16 px-6 relative z-10">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl mb-6 text-royal-blue font-moul">រចនាលិខិតអញ្ជើញឌីជីថល</h2>
          <div class="flex items-center justify-center gap-6 mb-8">
            <div class="h-[1px] w-24 bg-gradient-to-r from-transparent to-primary"></div>
            <span class="material-symbols-outlined text-primary text-3xl">local_florist</span>
            <div class="h-[1px] w-24 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
          <p class="text-charcoal/80 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            ផ្ដល់ភាពងាយស្រួល និងភាពថ្លៃថ្នូរដល់ភ្ញៀវកិត្តិយសរបស់អ្នក
            តាមរយៈការផ្ញើលិខិតអញ្ជើញឌីជីថលដែលរចនាឡើងយ៉ាងសម្រិតសម្រាំង។
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div class="lg:col-span-7 space-y-10">
            <section class="premium-card">
              <div class="kbach-ornament"></div>
              <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden">
                <!-- top accent bar -->
                <div class="h-4 bg-gradient-to-r from-[#E8CFC3] via-[#E6B8A2] to-[#E8CFC3]"></div>

                <div class="p-10">
                  <!-- header -->
                  <div class="flex items-center gap-4 mb-10">
                    <div class="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-primary">
                      <span class="material-symbols-outlined text-lg">favorite</span>
                    </div>
                    <h2 class="text-2xl font-moul text-charcoal">
                      ព័ត៌មានគូស្វាមីភរិយា
                    </h2>
                  </div>

                  <!-- form -->
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                    <!-- Groom -->
                    <div class="flex flex-col">
                      <label class="text-sm text-primary mb-2">
                        ឈ្មោះកូនកំលោះ
                      </label>
                      <input v-model="invitationData.groomName" type="text" placeholder="ឧ. ចាន់ វណ្ណៈ" class="border-b border-primary/40 bg-transparent
                   focus:outline-none focus:border-primary
                   py-2 text-charcoal placeholder:text-gray-400" />
                    </div>

                    <!-- Bride -->
                    <div class="flex flex-col">
                      <label class="text-sm text-primary mb-2">
                        ឈ្មោះកូនក្រមុំ
                      </label>
                      <input v-model="invitationData.brideName" type="text" placeholder="ឧ. កែវ សុម៉ាលី" class="border-b border-primary/40 bg-transparent
                   focus:outline-none focus:border-primary
                   py-2 text-charcoal placeholder:text-gray-400" />
                    </div>

                    <!-- Message -->
                    <div class="md:col-span-2 flex flex-col">
                      <label class="text-sm text-primary mb-2">
                        សារជូនពរ ឬ រឿងរ៉ាវស្នេហាសង្ខេប
                      </label>
                      <textarea v-model="invitationData.message" rows="3"
                        placeholder="រៀបរាប់ពីចំណងស្នេហារបស់អ្នកទាំងពីរ..." class="border-b border-primary/40 bg-transparent resize-none
                   focus:outline-none focus:border-primary
                   py-2 text-charcoal placeholder:text-gray-400"></textarea>
                    </div>
                  </div>
                </div>
              </div>
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
              </div>
            </section>

            <div class="flex flex-col sm:flex-row items-center gap-6 pt-4">
              <button
                class="gold-ghost-button w-full sm:w-1/3 py-5 uppercase tracking-[0.2em] text-sm">រក្សាទុក</button>
              <button
                class="gold-button w-full sm:w-2/3 py-5 flex items-center justify-center gap-3 uppercase tracking-[0.2em] text-sm group">
                <span
                  class="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">send</span>
                ផ្ញើលិខិតអញ្ជើញ
              </button>
            </div>
          </div>

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
          </div>
        </div>
        <div class="text-[10px] uppercase tracking-[0.5em] text-white/30">
          © ២០២៦ ETERNAL KHMER PHOTOGRAPHY.
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.romduol-pattern {
  @apply fixed inset-0 opacity-[0.08] pointer-events-none z-0 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuAl3Pz0ikioY9T9LMO7zsOssFTgyAl4I8JSULfEWMrUE5U_2Uz5h6nh4ype6kuhbzRWmt-O_9HX9vHgHwUZbdjHCDOVCOAbWiOquNVdRc-PotmjWM6pPYaUFNoFfMsjcLBxQF2FhyaMZtmTcvHn1hCXU5VP__z0y5HxSxMThjD8YuvDZt7dkqWpBxTfxFvQh-_0GYar-MfiAplFXtMB93VKUduunMCSREkSc_OUlX9-AS3rWVcxCL0nVSKRT2v-LVSJqRR_A30HQA')] bg-[length:300px_300px];
}

.kbach-ornament {
  @apply h-6 w-full opacity-80 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuDvl2o12CXyDNrA_iTiAUptS_h0mvfwIPqJk1SgP4xfu82Mbnwlr4Zr0YJ2y2jQCjn3gitDpHAE-shRKglG5QNWhxKkSF8zhxXLXzMuTBTS-9OvXb53aap1pL1rnKGGifw1wkBCpX3J_lFlLZeKWMnI3rkkbmXzPc8oZ6uvL7lJJ1sQbDQGeCnxgqjFp5L2kjLAP4Vpo6i8YZpTFA49qaAn2yZZ77RpAbHMCZw8d9gQ3qHg4x0zeH3mdLkJn5BXl7SvlNUSGgXJDw')] bg-repeat-x bg-center;
}

.premium-card {
  @apply bg-white rounded-xl shadow-[0_10px_30px_rgba(0, 0, 0, 0.04)] border border-primary/10 overflow-hidden relative;
}

.minimal-input {
  @apply border-0 border-b border-primary/40 bg-transparent px-0 py-3 focus:ring-0 focus:border-primary transition-all duration-300 outline-none placeholder:text-charcoal/30;
}

.input-label {
  @apply text-[11px] font-bold uppercase tracking-widest text-primary mb-1;
}

.gold-button {
  @apply bg-gradient-to-r from-primary via-gold-deep to-primary bg-[length:200%_auto] text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-[0.98];
}

.gold-ghost-button {
  @apply border-2 border-primary text-primary font-bold rounded-xl transition-all duration-300 hover:bg-primary/5;
}

.phone-mockup {
  @apply w-[320px] h-[640px] bg-[#1a1a1a] rounded-[44px] p-[10px] relative shadow-[0_40px_80px_-15px_rgba(0, 0, 0, 0.3), 0_0_0_4px_#D4AF37];
}

.phone-screen {
  @apply bg-white w-full h-full rounded-[34px] overflow-hidden relative;
}

.phone-notch {
  @apply absolute top-0 left-1/2 -translate-x-1/2 w-[130px] h-[28px] bg-[#1a1a1a] rounded-b-[16px] z-10;
}

.fill-icon {
  font-variation-settings: 'FILL' 1;
}
</style>