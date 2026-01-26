<template>
  <div>
    <HeroSection />
    <AboutSection />
    <GallerySection />
    <!-- <PackageSection /> -->
    <GuestInvitationForm />
    <!-- <ContactSection /> -->
  </div>
</template>

<script setup>
import HeroSection from '~/components/home/HeroSection.vue'
import AboutSection from '~/components/home/AboutSection.vue'
import GallerySection from '~/components/home/GallerySection.vue'
import PackageSection from '~/components/home/PackageSection.vue'
import GuestInvitationForm from '~/components/home/GuestInvitationForm.vue'
import ContactSection from '~/components/home/ContactSection.vue'
</script>
