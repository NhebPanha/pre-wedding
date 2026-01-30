<script setup>
const guestName = ref("ភ្ញៀវកិត្តិយស");
const attendance = ref("yes");
const guestCount = ref(1);

// Countdown Logic
const timeLeft = ref({ days: '00', hours: '00', mins: '00', secs: '00' });
onMounted(() => {
  const targetDate = new Date("2026-02-12T16:30:00").getTime();

  setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    timeLeft.value = {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0'),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0'),
      mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0'),
      secs: Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0'),
    };
  }, 1000);
});
</script>

<template>
  <div class="silk-texture relative min-h-screen">
    <div class="romduol-corner top-0 left-0"></div>
    <div class="romduol-corner top-0 right-0 -scale-x-100"></div>

    <header class="relative h-screen flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img class="w-full h-full object-cover opacity-80" src="https://via.placeholder.com/1920x1080" alt="Wedding" />
        <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-silk-light"></div>
      </div>

      <div class="relative z-10 text-center px-6">
        <p class="gold-leaf-text font-moul text-2xl md:text-3xl mb-6 tracking-widest">សិរីសួស្តី អាពាហ៍ពិពាហ៍</p>
        <h1 class="text-6xl md:text-8xl font-moul mb-10 gold-leaf-text leading-tight">វណ្ណៈ & សុម៉ាលី</h1>

        <div class="flex justify-center gap-4">
          <div v-for="(val, unit) in timeLeft" :key="unit"
            class="flex flex-col items-center justify-center w-20 h-24 rounded-xl border border-primary/40 bg-white/30 backdrop-blur-md">
            <span class="text-2xl font-bold text-primary">{{ val }}</span>
            <span class="text-[10px] uppercase font-bold tracking-widest text-charcoal/80">
              {{ unit === 'days' ? 'ថ្ងៃ' : unit === 'hours' ? 'ម៉ោង' : unit === 'mins' ? 'នាទី' : 'វិនាទី' }}
            </span>
          </div>
        </div>
      </div>
    </header>

    <section class="py-32 px-6">
      <div class="max-w-5xl mx-auto text-center space-y-20">
        <h2 class="text-4xl text-royal-blue tracking-wide">កម្មវិធីពិសាភោជនាហារ</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div v-for="item in details" :key="item.title" class="group">
            <div class="w-20 h-20 flex items-center justify-center mx-auto mb-6 bg-primary/5 rounded-full">
              <span class="material-symbols-outlined text-primary text-5xl">{{ item.icon }}</span>
            </div>
            <h3 class="text-2xl mb-4">{{ item.title }}</h3>
            <p class="text-charcoal/80" v-html="item.desc"></p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-32 px-6 bg-white/30 backdrop-blur-sm border-y border-primary/10">
      <div class="max-w-3xl mx-auto">
        <div class="bg-white p-8 md:p-16 shadow-2xl relative border border-primary/20">
          <h2 class="text-3xl text-royal-blue text-center mb-10">ការឆ្លើយតបការអញ្ជើញ</h2>

          <form @submit.prevent="handleSubmit" class="space-y-12">
            <div class="text-center bg-silk-light py-4 mb-8">
              <span class="text-royal-blue">ជូនចំពោះ៖ </span>
              <span class="text-primary font-moul text-xl">{{ guestName }}</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div class="flex flex-col">
                <label class="text-[11px] font-bold uppercase text-primary mb-2">ឈ្មោះអ្នកអញ្ជើញ</label>
                <input v-model="guestName" type="text"
                  class="border-0 border-b-2 border-primary/30 focus:ring-0 focus:border-primary bg-transparent py-2 outline-none" />
              </div>
              <div class="flex flex-col">
                <label class="text-[11px] font-bold uppercase text-primary mb-2">ចំនួនភ្ញៀវ</label>
                <input v-model="guestCount" type="number"
                  class="border-0 border-b-2 border-primary/30 focus:ring-0 focus:border-primary bg-transparent py-2 outline-none" />
              </div>
            </div>

            <button type="submit"
              class="w-full py-4 bg-gradient-to-r from-primary to-gold-deep text-white font-moul rounded shadow-lg hover:scale-[1.02] transition-transform">
              បញ្ជូនការឆ្លើយតប
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const details = [
  { title: 'កាលបរិច្ឆេទ', icon: 'calendar_today', desc: 'ថ្ងៃព្រហស្បត្ត៍ី ទី១២ ខែកុម្ភៈ ឆ្នាំ២០២៦ <br/> <small></small>' },
  { title: 'ម៉ោងពេល', icon: 'history_toggle_off', desc: 'ចាប់ផ្ដើមទទួលភ្ញៀវ <br/> <strong>០៥​ស:៣០ ល្ងាច</strong>' },
  { title: 'ទីតាំង', icon: 'distance', desc: 'ភូមិ នាងទើត​​ ឃុំ នាងទើត  <br/> ស្រុកតំបែរ' },
];
</script>