<template>
    <section>
        <SectionTitle title="ជ្រើសរើសកញ្ចប់សេវាកម្ម" subtitle="Pre-Wedding & Wedding Photography" />

        <div class="packages">
            <PackageCard v-for="pkg in packages" :key="pkg.id" :pkg="pkg" />
        </div>
    </section>
</template>

<script setup>
import { usePackages } from '@/composables/usePackages'
import PackageCard from './PackageCard.vue'
import SectionTitle from '@/components/common/SectionTitle.vue'

const { packages } = usePackages()
</script>
