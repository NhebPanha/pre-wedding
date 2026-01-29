<script setup>
const invitationDate = "២៤ ធ្នូ ២០២៤";
const coupleNames = "វណ្ណៈ & សុម៉ាលី";

const form = reactive({
  attendance: 'yes',
  guests: 1,
  name: ''
});

const submitRSVP = () => {
  console.log("RSVP Received:", form);
  alert("សូមអរគុណសម្រាប់ការឆ្លើយតប!");
};
</script>

<template>
  <div class="silk-texture relative min-h-screen">
    <div class="gold-frame hidden md:block"></div>

      <div class="hero-parallax" style="background-image: url('/path-to-your-photo.jpg')">
        <div class="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div class="relative z-10 text-center text-white px-6">
        <p class="text-primary font-moul text-2xl mb-4">សិរីសួស្តី អាពាហ៍ពិពាហ៍</p>
        <h1 class="text-5xl md:text-8xl font-moul mb-8">{{ coupleNames }}</h1>
        
        <div class="flex items-center justify-center gap-6">
          <div class="h-[1px] w-24 bg-primary"></div>
          <span class="material-symbols-outlined text-primary text-3xl">favorite</span>
          <div class="h-[1px] w-24 bg-primary"></div>
        </div>
        
        <p class="mt-8 text-xl tracking-widest uppercase">{{ invitationDate }}</p>

        <div class="countdown-container">
          <div class="countdown-box"><span class="text-2xl font-bold text-primary">១២</span><span class="text-[10px]">ថ្ងៃ</span></div>
          <div class="countdown-box"><span class="text-2xl font-bold text-primary">០៨</span><span class="text-[10px]">ម៉ោង</span></div>
          <div class="countdown-box"><span class="text-2xl font-bold text-primary">៤៥</span><span class="text-[10px]">នាទី</span></div>
        </div>
      </div>

    <section class="py-24 px-6 text-center">
      <h2 class="text-3xl text-royal-blue font-moul mb-12">កម្មវិធីពិសាភោជនាហារ</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
        <div>
          <span class="material-symbols-outlined text-primary text-4xl mb-4">calendar_month</span>
          <h3 class="text-xl font-moul">កាលបរិច្ឆេទ</h3>
          <p>ថ្ងៃព្រហស្បត្តិ៍ ទី១២ ខែធ្នូ ឆ្នាំ២០២៦</p>
        </div>
        <div>
          <span class="material-symbols-outlined text-primary text-4xl mb-4">schedule</span>
          <h3 class="text-xl font-moul">ម៉ោងពេល</h3>
          <p>ចាប់ផ្ដើមទទួលភ្ញៀវ</p>
          <p class="text-2xl font-bold text-royal-blue">០៤:៣០ ល្ងាច</p>
        </div>
        <div>
          <span class="material-symbols-outlined text-primary text-4xl mb-4">location_on</span>
          <h3 class="text-xl font-moul">ទីតាំង</h3>
          <p>ភូមិចំបក់ ឃុំនាងទើត​ ស្រុកតំបែរ​ ខេត្តត្បូងឃ្មុំ</p>
          <h3>គេហដ្ឋានខាងប្រុស</h3>
        </div>
      </div>
    </section>

    <section class="py-24 px-6 bg-white/40">
      <div class="rsvp-card">
        <h2 class="text-center font-moul text-2xl text-royal-blue mb-8">ការឆ្លើយតបការអញ្ជើញ</h2>
        <form @submit.prevent="submitRSVP" class="space-y-8">
          <div class="text-center">
            <label class="block text-primary font-bold mb-4">តើលោកអ្នកនឹងអញ្ជើញចូលរួមដែរឬទេ?</label>
            <div class="flex justify-center gap-6">
              <label class="flex items-center gap-2"><input type="radio" v-model="form.attendance" value="yes"> ចូលរួម</label>
              <label class="flex items-center gap-2"><input type="radio" v-model="form.attendance" value="no"> មិនបានចូលរួម</label>
            </div>
          </div>
          
          <input type="text" v-model="form.name" class="minimal-input" placeholder="បញ្ជាក់ឈ្មោះរបស់អ្នក">
          <button type="submit" class="submit-btn">បញ្ជូន</button>
        </form>
      </div>
    </section>
  </div>
</template>