<template>
  <div class="silk-texture min-h-screen relative selection:bg-primary selection:text-white">
    <div class="romduol-pattern"></div>

    <main class="py-16 px-6 relative z-10">
      <div class="max-w-7xl mx-auto">
        <header class="text-center mb-16">
          <h1 class="text-4xl md:text-5xl mb-6 text-royal-blue">រចនាលិខិតអញ្ជើញឌីជីថល</h1>
          <div class="flex items-center justify-center gap-6 mb-8">
            <div class="h-[1px] w-24 bg-gradient-to-r from-transparent to-primary"></div>
            <span class="material-symbols-outlined text-primary text-3xl">local_florist</span>
            <div class="h-[1px] w-24 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
        </header>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div class="lg:col-span-7 space-y-10">
            <section class="premium-card">
              <div class="kbach-ornament"></div>
              <div class="p-10">
                <div class="flex items-center gap-4 mb-10">
                  <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span class="material-symbols-outlined">favorite</span>
                  </div>
                  <h2 class="text-2xl">ព័ត៌មានគូស្វាមីភរិយា</h2>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  <div class="flex flex-col group">
                    <label class="label-style">ឈ្មោះកូនកំលោះ</label>
                    <input 
                      v-model="form.groomName" 
                      type="text" 
                      class="minimal-input" 
                      placeholder="ឧ. ចាន់ វណ្ណៈ"
                    />
                  </div>
                  <div class="flex flex-col group">
                    <label class="label-style">ឈ្មោះកូនក្រមុំ</label>
                    <input 
                      v-model="form.brideName" 
                      type="text" 
                      class="minimal-input" 
                      placeholder="ឧ. កែវ សុម៉ាលី"
                    />
                  </div>
                </div>
              </div>
            </section>

            <div class="flex flex-col sm:flex-row items-center gap-6 pt-4">
              <button @click="handleSave" class="gold-ghost-button w-full sm:w-1/3 py-5 uppercase tracking-[0.2em] text-sm">
                រក្សាទុក
              </button>
              <button class="gold-button w-full sm:w-2/3 py-5 flex items-center justify-center gap-3 uppercase tracking-[0.2em] text-sm group">
                <span class="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">send</span>
                ផ្ញើលិខិតអញ្ជើញ
              </button>
            </div>
          </div>

          <div class="lg:col-span-5 relative">
            <div class="sticky top-32 flex flex-col items-center">
              <div class="phone-mockup">
                <div class="phone-notch"></div>
                <div class="phone-screen bg-[#FAF9F6]">
                   <div class="h-full flex flex-col text-center p-8">
                      <div class="mt-20 space-y-4">
                        <h4 class="text-2xl font-moul text-royal-blue">
                          {{ form.groomName || 'ឈ្មោះកូនកំលោះ' }}
                        </h4>
                        <span class="text-primary font-moul">&</span>
                        <h4 class="text-2xl font-moul text-royal-blue">
                          {{ form.brideName || 'ឈ្មោះកូនក្រមុំ' }}
                        </h4>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
/**
 * Types and Interfaces
 */
interface InvitationForm {
  groomName: string;
  brideName: string;
  date: string;
  time: string;
  location: string;
  theme: 'gold' | 'pink' | 'blue';
}

/**
 * State
 */
const form = reactive<InvitationForm>({
  groomName: '',
  brideName: '',
  date: '',
  time: '',
  location: '',
  theme: 'gold'
});

/**
 * Methods
 */
const handleSave = (): void => {
  console.log('Saving invitation data:', toRaw(form));
  // Add your API logic here
};

/**
 * SEO
 */
useSeoMeta({
  title: 'Eternal Khmer | Services',
  ogTitle: 'Create Your Digital Invitation',
  description: 'Professional wedding and photography services in Cambodia.',
  ogDescription: 'Experience the elegance of traditional Khmer wedding invitations digitally.',
});
</script>

<style scoped>
/* Scoped styles remain unchanged from previous CSS/Tailwind logic */
.label-style {
  @apply text-[11px] font-bold uppercase tracking-widest text-primary mb-1;
}
.minimal-input {
  @apply border-0 border-b border-primary/40 bg-transparent px-0 py-3 focus:ring-0 focus:border-primary transition-all duration-300 outline-none;
}
.premium-card {
  @apply bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-primary/10 overflow-hidden relative;
}
.gold-button {
  @apply bg-gradient-to-r from-primary via-gold-deep to-primary text-white font-bold rounded-xl transition-all shadow-lg;
}
.gold-ghost-button {
  @apply border-2 border-primary text-primary font-bold rounded-xl transition-all hover:bg-primary/5;
}
.phone-mockup {
  @apply w-[320px] h-[640px] bg-[#1a1a1a] rounded-[44px] p-[10px] relative shadow-2xl border-4 border-primary/30;
}
.phone-screen {
  @apply w-full h-full rounded-[34px] overflow-hidden relative;
}
.phone-notch {
  @apply absolute top-0 left-1/2 -translate-x-1/2 w-[130px] h-[28px] bg-[#1a1a1a] rounded-b-[16px] z-10;
}
</style>