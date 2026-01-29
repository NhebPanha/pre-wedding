<template>
    <section class="bg-[#FBF6ED] py-16 px-6">
        <div class="max-w-7xl mx-auto">
            <!-- Title -->
            <h2 class="text-center text-3xl font-bold text-[#2F2F2F] mb-12 relative inline-block">
                ទីតាំងកម្មវិធីរបស់យើង
                <span class="absolute left-1/2 -bottom-2 w-16 h-1 bg-yellow-400 -translate-x-1/2 rounded"></span>
            </h2>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
                <!-- Google Map -->
                <div class="lg:col-span-2 rounded-2xl shadow-lg overflow-hidden bg-white">
                    <iframe class="w-full h-[360px]" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                        src="https:/www.google.com/maps?q=ចំបក់ នាងទើត តំបែរ ត្បូងឃ្មុំ&z=15&output=embed"
                        allowfullscreen>
                    </iframe>
                </div>
                <!-- Branch List -->
                <div>
                    <h3 class="font-semibold text-lg mb-6 text-gray-800">
                        គេហដ្ឋានសាខារបស់យើង
                    </h3>
                    <ul class="space-y-6">
                        <li class="flex gap-3">
                            <span class="text-yellow-400 text-xl">★</span>
                            <div>
                                <p class="font-semibold text-gray-800">ត្បូងឃ្មុំ</p>
                                <p class="text-sm text-gray-600">
                                    ចំបក់,នាងទើត ,តំបែរ​,ត្បូងឃ្មុំ
                                </p>
                                <p class="text-yellow-500 text-sm font-medium">
                                    +855 762 792 343
                                </p>
                            </div>
                        </li>

                    </ul>

                    <!-- Button -->
                    <button
                        class="mt-10 w-full border-2 border-yellow-400 text-yellow-600 font-semibold py-3 rounded-xl hover:bg-yellow-400 hover:text-white transition">
                        មើលមើលទីតាំង​
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>