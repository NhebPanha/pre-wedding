<template>
    <section class="bg-champagne dark:bg-charcoal/50 py-24">
        <div class="max-w-7xl mx-auto px-6 lg:px-10">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <!-- Text Info -->
                <div class="text-left">
                    <h2 class="text-4xl font-extrabold mb-6 tracking-tight leading-snug">
                        ដំណើរនៃក្តីស្រលាញ់របស់អ្នកចាប់ផ្តើមនៅទីនេះ</h2>
                    <p class="text-lg opacity-80 mb-10 leading-relaxed">
                        គ្រប់គូស្នេហ៍សុទ្ធតែមានរឿងរ៉ាវពិសេស។ យើងខ្ញុំផ្តល់ជូននូវកញ្ចប់សេវាកម្មដែលតម្រូវតាមតម្រូវការ
                        ចាប់ពីការថតរូបពេលថ្ងៃលិច រហូតដល់ការថតរូបបែបមរតកពេញមួយថ្ងៃនៅទីតាំងល្បីៗជុំវិញប្រទេសកម្ពុជា។
                    </p>
                </div>
                <!-- Form -->
                <div
                    class="bg-background-light dark:bg-background-dark p-8 md:p-12 rounded-3xl shadow-2xl border border-champagne dark:border-white/10 text-left">
                    <h3 class="text-2xl font-bold mb-6">សាកសួរអំពីកាលបរិច្ឆេទរបស់អ្នក</h3>
                    <form class="space-y-4">
                        <div class="grid grid-cols-2 gap-4">
                            <div class="space-y-1.5">
                                <label class="text-xs font-bold uppercase tracking-wider opacity-60">ឈ្មោះពេញ</label>
                                <input
                                    class="w-full bg-champagne dark:bg-white/5 border-none rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary outline-none"
                                    placeholder="ឧ. សុម៉ាលី វណ្ណៈ" type="text" />
                            </div>
                            <div class="space-y-1.5">
                                <label
                                    class="text-xs font-bold uppercase tracking-wider opacity-60">កាលបរិច្ឆេទអាពាហ៍ពិពាហ៍</label>
                                <input
                                    class="w-full bg-champagne dark:bg-white/5 border-none rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary outline-none"
                                    type="date" />
                            </div>
                        </div>
                        <div class="space-y-1.5">
                            <label class="text-xs font-bold uppercase tracking-wider opacity-60">អាសយដ្ឋានអ៊ីមែល</label>
                            <input
                                class="w-full bg-champagne dark:bg-white/5 border-none rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary outline-none"
                                placeholder="hello@example.com" type="email" />
                        </div>
                        <div class="space-y-1.5">
                            <label
                                class="text-xs font-bold uppercase tracking-wider opacity-60">បំណងប្រាថ្នារបស់អ្នក</label>
                            <textarea
                                class="w-full bg-champagne dark:bg-white/5 border-none rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary outline-none"
                                placeholder="ប្រាប់យើងអំពីការថតរូបក្នុងក្តីសុបិនរបស់អ្នក..." rows="4"></textarea>
                        </div>
                        <button
                            class="w-full py-4 bg-primary text-charcoal font-black rounded-xl hover:shadow-lg transition-all transform active:scale-95">
                            ពិនិត្យមើលភាពទំនេរ
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
</script>
