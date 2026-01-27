<template>
  <section class="bg-[#F9F7EF] py-20 px-6 lg:px-20 min-h-screen flex items-center">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      
      <div class="space-y-8">
        <h1 class="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
          ដំណើរនៃក្តីស្រលាញ់របស់អ្នកចាប់ផ្តើមនៅទីនេះ
        </h1>
        
        <p class="text-slate-600 text-lg leading-relaxed max-w-xl">
          គ្រប់គូស្នេហ៍សុទ្ធតែមានរឿងរ៉ាវពិសេស។ យើងខ្ញុំផ្តល់ជូននូវកញ្ចប់សេវាកម្មដែលតម្រូវតាមតម្រូវការ ចាប់ពីការថតរូបពេលថ្ងៃលិច រហូតដល់ការថតរូបបែបមរតកពេញមួយថ្ងៃនៅទីតាំងល្បីៗជុំវិញប្រទេសកម្ពុជា។
        </p>

        <div class="space-y-6">
          <div class="flex items-start gap-4">
            <div class="bg-yellow-100 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <div>
              <h4 class="font-bold text-slate-800">ការរៀបចំដោយផ្ចិតផ្ចង់</h4>
              <p class="text-slate-500 text-sm">កិច្ចសហការជាមួយអ្នករៀបចំអាពាហ៍ពិពាហ៍ ដើម្បីធានាបាននូវរូបភាពដ៏ល្អឥតខ្ចោះ។</p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="bg-yellow-100 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h4 class="font-bold text-slate-800">ទីតាំងផ្តាច់មុខ</h4>
              <p class="text-slate-500 text-sm">ការស្វែងរកទីតាំងដែលរ៉ូមែនទិកបំផុតសម្រាប់អ្នក ដើម្បីទទួលបានរូបភាពដ៏អស្ចារ្យ។</p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white p-10 md:p-14 rounded-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white">
        <h3 class="text-2xl font-bold mb-8 text-slate-800">សាកសួរអំពីកាលបរិច្ឆេទរបស់អ្នក</h3>
        
        <form class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label class="text-xs font-bold text-slate-400 uppercase ml-1">ឈ្មោះពេញ</label>
              <input type="text" placeholder="ឧ. សុម៉ាលី វណ្ណៈ" class="w-full bg-[#F3F1E9] border-none rounded-2xl p-4 text-slate-700 focus:ring-2 focus:ring-yellow-500 transition-all outline-none" />
            </div>
            <div class="space-y-2">
              <label class="text-xs font-bold text-slate-400 uppercase ml-1">កាលបរិច្ឆេទ</label>
              <input type="date" class="w-full bg-[#F3F1E9] border-none rounded-2xl p-4 text-slate-700 focus:ring-2 focus:ring-yellow-500 transition-all outline-none" />
            </div>
          </div>

          <div class="space-y-2">
            <label class="text-xs font-bold text-slate-400 uppercase ml-1">អាសយដ្ឋានអ៊ីមែល</label>
            <input type="email" placeholder="hello@example.com" class="w-full bg-[#F3F1E9] border-none rounded-2xl p-4 text-slate-700 focus:ring-2 focus:ring-yellow-500 transition-all outline-none" />
          </div>

          <div class="space-y-2">
            <label class="text-xs font-bold text-slate-400 uppercase ml-1">បំណងប្រាថ្នារបស់អ្នក</label>
            <textarea rows="4" placeholder="ប្រាប់យើងអំពីការថតរូបក្នុងក្តីសុបិនរបស់អ្នក..." class="w-full bg-[#F3F1E9] border-none rounded-2xl p-4 text-slate-700 focus:ring-2 focus:ring-yellow-500 transition-all outline-none resize-none"></textarea>
          </div>

          <button class="w-full bg-[#F4D024] hover:bg-[#EBC410] text-slate-900 font-bold py-5 rounded-2xl shadow-lg shadow-yellow-500/20 transition-all transform active:scale-[0.98] mt-4 uppercase tracking-wider">
            ពិនិត្យមើលភាពទំនេរ
          </button>
        </form>
      </div>

    </div>
  </section>
</template>