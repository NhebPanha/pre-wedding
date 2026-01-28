<template>
  <section class="bg-[#fbf9f4] py-20 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <div class="flex justify-center lg:justify-start">
          <div class="w-full max-w-[450px] bg-white rounded-[40px] shadow-2xl p-5 border border-gray-50">
            <div class="overflow-hidden rounded-[30px] aspect-[4/5]">
              <img src="/images/image16.jpg" alt="couple"
                class="w-full h-full object-cover" />
            </div>

            <div class="text-center mt-6">
              <span class="material-symbols-outlined text-3xl md:text-4xl text-yellow-500"
                style="font-variation-settings: 'FILL' 1">
                favorite
              </span>

              <h3 class="font-khmer text-2xl font-black text-gray-800 mt-2">
                ភា​ និង ស្រីល័ក្ខ
              </h3>

              <p class="text-yellow-600/70 text-xs font-bold uppercase tracking-widest mt-1 mb-4">
                រឿងរ៉ាវស្នេហ៍ដ៏មានន័យ
              </p>

              <div class="w-3/4 mx-auto h-[1px] bg-gray-100 mb-4"></div>

              <p class="text-[10px] text-gray-400 mb-6 px-4">
                ផ្លាស់ប្តូរបទពិសោធន៍ Pre-wedding របស់អ្នកទៅជាការចងចាំដ៏អស្ចារ្យ។
              </p>

              <button
                class="w-full bg-[#f2cc0c] hover:bg-[#e1bd0b] text-gray-900 font-bold py-3 rounded-full transition-all text-sm">
                ផ្ដើមដំណើរកម្សាន្ត
              </button>
            </div>
          </div>
        </div>

        <div class="space-y-6">
          <div class="space-y-2">
            <span class="text-[#f2cc0c] text-sm font-bold uppercase tracking-wide">
              មរតកដើមនៃរឿងរ៉ាវស្នេហា
            </span>
            <h2 class="font-khmer text-4xl md:text-5xl font-black text-gray-900 leading-[1.2]">
              ចែករំលែកសេចក្តី<br />រីករាយរបស់អ្នក
            </h2>
          </div>

          <p class="text-gray-500 text-lg leading-relaxed max-w-lg">
            សេវាកម្មពិសេស "Guest Portal" របស់យើងអនុញ្ញាតឱ្យអ្នកបង្កើតលីងអញ្ជើញផ្ទាល់ខ្លួន
            ដែលអាចប្រើប្រាស់បានគ្រប់គ្រងបញ្ជីភ្ញៀវ និងចែករំលែករូបភាពស្អាតៗ។
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div class="space-y-3">
              <div class="w-12 h-12 rounded-xl bg-yellow-50 flex items-center justify-center">
                <span class="material-symbols-outlined text-3xl md:text-4xl text-yellow-500"
                  style="font-variation-settings: 'FILL' 1">
                  qr_code_scanner
                </span>
              </div>
              <h4 class="font-bold text-gray-900 text-lg">ការចូលមើលងាយស្រួល</h4>
              <p class="text-sm text-gray-400 leading-snug">
                ស្កេន QR កូដសម្រាប់ពិនិត្យរូបថត ដើម្បីគ្រប់គ្រងទិន្នន័យរូបភាព។
              </p>
            </div>

            <div class="space-y-3">
              <div class="w-12 h-12 rounded-xl bg-yellow-50 flex items-center justify-center">
                <span class="material-symbols-outlined text-3xl md:text-4xl text-yellow-500"
                  style="font-variation-settings: 'FILL' 1">
                  group
                </span>
              </div>
              <h4 class="font-bold text-gray-900 text-lg">ការគ្រប់គ្រងភ្ញៀវ</h4>
              <p class="text-sm text-gray-400 leading-snug">
                តាមដានចំនួនភ្ញៀវដែលបានចូលរួម និងរូបភាពដែលពួកគេស្រលាញ់។
              </p>
            </div>
          </div>
          <div class="pt-6">
            <button
              class="flex items-center gap-3 bg-[#1a1a1a] text-white px-10 py-4 rounded-2xl hover:bg-black transition-all group">
              <span class="font-bold">បង្កើតសេវាកម្មរបស់អ្នក</span>
              <span class="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* Recommend: 'Kantumruy Pro' or 'Moul' for the bold headings */
@import url('https://fonts.googleapis.com/css2?family=Kantumruy+Pro:wght@400;700&family=Moul&display=swap');

.font-khmer {
  font-family: 'Kantumruy Pro', sans-serif;
  /* Use 'Moul' for the main big heading if you want the traditional thick style */
}

h2.font-khmer {
  font-family: 'Kantumruy Pro', sans-serif;
  font-weight: 900;
}
</style>