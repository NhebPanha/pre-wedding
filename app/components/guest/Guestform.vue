<script setup>
// State for the RSVP form
const form = reactive({
  attendance: 'yes',
  guests: 1,
  name: ''
})

const submitRSVP = () => {
  console.log('Form Submitted:', form)
  alert('សូមអរគុណសម្រាប់ការឆ្លើយតប!')
}

// SEO and Head Management
useHead({
  title: 'Guest Preview | សិរីសួស្តី អាពាហ៍ពិពាហ៍',
  link: [
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Kantumruy+Pro:wght@300;400;500;600;700&family=Moul&family=Hanuman:wght@300;400;700;900&display=swap' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Symbols+Outlined' }
  ]
})
</script>

<template>
  <div class="silk-texture relative min-h-screen font-body bg-champagne text-charcoal overflow-x-hidden">
    <div class="gold-frame hidden md:block"></div>
    <div class="romduol-pattern"></div>

    <header class="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 hero-parallax z-0" style="background-image: url('/path-to-your-image.jpg');">
        <div class="absolute inset-0 bg-black/30"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-champagne via-transparent to-black/20"></div>
      </div>
      
      <div class="relative z-10 text-center text-white px-6">
        <p class="text-primary font-moul text-xl md:text-2xl mb-4 drop-shadow-lg">សិរីសួស្តី អាពាហ៍ពិពាហ៍</p>
        <h1 class="text-5xl md:text-8xl font-moul mb-8 tracking-wide drop-shadow-2xl">វណ្ណៈ & សុម៉ាលី</h1>
        
        <div class="flex items-center justify-center gap-6">
          <div class="h-[1px] w-12 md:w-24 bg-primary"></div>
          <span class="material-symbols-outlined text-primary text-3xl">favorite</span>
          <div class="h-[1px] w-12 md:w-24 bg-primary"></div>
        </div>
        
        <p class="mt-8 text-lg md:text-xl font-light tracking-widest uppercase">២៤ ធ្នូ ២០២៤</p>
        
        <div class="mt-12 flex justify-center gap-4 text-charcoal">
          <div v-for="(val, label) in { '១២': 'ថ្ងៃ', '០៨': 'ម៉ោង', '៤៥': 'នាទី', '២០': 'វិនាទី' }" :key="label" class="countdown-box">
            <span class="text-2xl font-bold text-primary">{{ val }}</span>
            <span class="text-[10px] uppercase font-bold tracking-tighter">{{ label }}</span>
          </div>
        </div>
      </div>
      
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <span class="material-symbols-outlined text-primary text-4xl">keyboard_double_arrow_down</span>
      </div>
    </header>

    <section class="py-24 px-6 relative z-10">
      <div class="max-w-4xl mx-auto text-center space-y-16">
        <div class="space-y-4">
          <h2 class="text-3xl text-royal-blue font-moul">កម្មវិធីពិសាភោជនាហារ</h2>
          <div class="kbach-divider"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div class="space-y-4">
            <div class="icon-circle"><span class="material-symbols-outlined">calendar_month</span></div>
            <h3 class="text-xl font-moul">កាលបរិច្ឆេទ</h3>
            <p class="text-charcoal/70">ថ្ងៃអង្គារ ទី២៤ ខែធ្នូ ឆ្នាំ២០២៤</p>
            <p class="text-charcoal/70 text-sm">ត្រូវនឹងថ្ងៃ ៩រោច ខែមិគសិរ ឆ្នាំរោង</p>
          </div>
          <div class="space-y-4">
            <div class="icon-circle"><span class="material-symbols-outlined">schedule</span></div>
            <h3 class="text-xl font-moul">ម៉ោងពេល</h3>
            <p class="text-charcoal/70">ចាប់ផ្ដើមទទួលភ្ញៀវ</p>
            <p class="font-bold text-royal-blue text-2xl">០៤:៣០ ល្ងាច</p>
          </div>
          <div class="space-y-4">
            <div class="icon-circle"><span class="material-symbols-outlined">location_on</span></div>
            <h3 class="text-xl font-moul">ទីតាំង</h3>
            <p class="text-charcoal/70">សាលមហោស្រព កោះពេជ្រ</p>
            <p class="text-charcoal/70 text-sm">អគារ L, រាជធានីភ្នំពេញ</p>
          </div>
        </div>

        <div class="pt-8">
          <NuxtLink to="https://maps.google.com" class="btn-primary">
            <span class="material-symbols-outlined">map</span> មើលទីតាំងលើផែនទី
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="py-24 px-6 bg-white/40 relative z-10">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl text-royal-blue mb-4 font-moul">ការឆ្លើយតបការអញ្ជើញ</h2>
          <p class="text-charcoal/60">សូមផ្ដល់ព័ត៌មានពីការចូលរួមរបស់អ្នក ដើម្បីយើងរៀបចំការទទួលបដិសណ្ឋារកិច្ចឱ្យបានសមរម្យ</p>
        </div>

        <div class="rsvp-card">
          <form @submit.prevent="submitRSVP" class="space-y-10">
            <div class="space-y-6">
              <label class="text-sm font-bold uppercase tracking-widest text-primary block text-center">តើលោកអ្នកនឹងអញ្ជើញចូលរួមដែរឬទេ?</label>
              <div class="flex justify-center gap-8">
                <label class="flex items-center gap-3 cursor-pointer group">
                  <input v-model="form.attendance" value="yes" type="radio" class="w-5 h-5 text-primary border-primary/40 focus:ring-primary"/>
                  <span class="font-medium group-hover:text-primary transition-colors">ចូលរួម</span>
                </label>
                <label class="flex items-center gap-3 cursor-pointer group">
                  <input v-model="form.attendance" value="no" type="radio" class="w-5 h-5 text-primary border-primary/40 focus:ring-primary"/>
                  <span class="font-medium group-hover:text-primary transition-colors">មិនបានចូលរួម</span>
                </label>
              </div>
            </div>

            <div class="flex flex-col group">
              <label class="input-label">ចំនួនភ្ញៀវ (បូករួមទាំងអ្នក)</label>
              <input v-model="form.guests" class="minimal-input text-center text-xl" type="number" min="1" max="10" />
            </div>

            <div class="flex flex-col group">
              <label class="input-label">ឈ្មោះអ្នកតំណាង</label>
              <input v-model="form.name" class="minimal-input text-center" placeholder="បញ្ជាក់ឈ្មោះរបស់អ្នក" type="text" />
            </div>

            <button type="submit" class="submit-btn">បញ្ជូន</button>
          </form>
        </div>
      </div>
    </section>

    <footer class="py-24 px-6 text-center relative z-10">
      <div class="max-w-2xl mx-auto space-y-8">
        <p class="text-2xl font-moul text-royal-blue leading-relaxed">
          វត្តមានរបស់អស់លោកអ្នក <br/> គឺជាកិត្តិយសដ៏ខ្ពង់ខ្ពស់សម្រាប់យើងខ្ញុំ
        </p>
        <p class="text-charcoal/50 italic font-light">សូមអរគុណ និងសូមជូនពរសុខភាពល្អគ្រប់ៗគ្នា</p>
        <div class="mt-20 pt-8 border-t border-primary/10">
          <p class="text-[10px] uppercase tracking-[0.4em] text-charcoal/30">Designed with heart by Eternal Khmer Photography</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.silk-texture {
  background-image: radial-gradient(circle at 2px 2px, rgba(212, 175, 55, 0.05) 1px, transparent 0);
  background-size: 40px 40px;
}
.romduol-pattern {
  @apply absolute inset-0 opacity-5 pointer-events-none z-0;
  background-image: url('/pattern-romduol.png');
  background-size: 200px 200px;
}
.gold-frame {
  @apply fixed inset-4 border-2 border-primary pointer-events-none z-50;
}
.gold-frame::before {
  content: '';
  @apply absolute inset-2 border border-primary/30;
}
.hero-parallax {
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
.countdown-box {
  @apply flex flex-col items-center justify-center w-20 h-24 rounded-lg border border-primary/30 bg-white/40 backdrop-blur-sm shadow-sm;
}
.kbach-divider {
  @apply h-8 w-full opacity-70 bg-center bg-no-repeat bg-contain;
  background-image: url('/kbach-divider.png');
}
.icon-circle {
  @apply w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center mx-auto mb-6 text-primary;
}
.btn-primary {
  @apply inline-flex items-center gap-3 px-10 py-4 bg-primary text-white rounded-full font-bold shadow-lg shadow-primary/30 hover:bg-gold-deep transition-all transform hover:scale-105;
}
.rsvp-card {
  @apply bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-primary/20 max-w-lg mx-auto;
}
.input-label {
  @apply text-[11px] font-bold uppercase tracking-widest text-primary mb-1;
}
.minimal-input {
  @apply border-0 border-b border-primary/40 bg-transparent px-0 py-3 focus:ring-0 focus:border-primary transition-all duration-300 outline-none placeholder:text-charcoal/30;
}
.submit-btn {
  @apply w-full py-5 bg-gradient-to-r from-primary to-gold-deep text-white font-moul tracking-widest rounded-xl shadow-lg shadow-primary/40 hover:brightness-110 active:scale-[0.98] transition-all;
}
</style>