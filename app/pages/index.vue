<template>
  <div>
    <HeroSection />
    <AboutSection />
    <HighlightSection/>
    <GallerySection />
    <!-- <PackageSection/> -->
    <GuestInvitationForm />
    <Map />
  </div>
</template>

<script setup>
import HeroSection from '~/components/home/HeroSection.vue'
import AboutSection from '~/components/home/AboutSection.vue'
import GallerySection from '~/components/home/GallerySection.vue'
import PackageSection from '~/components/home/PackageSection.vue'
import GuestInvitationForm from '~/components/home/GuestInvitationForm.vue'
import HighlightSection from '~/components/home/HighlightSection.vue'
import Map from '~/components/home/Map.vue'

</script>
