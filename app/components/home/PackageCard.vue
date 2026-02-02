<template>
  <CardWrapper>
    <img :src="pkg.image" class="h-[280px] w-full object-cover rounded-lg" />
    <h3 class=" mt-2">{{ pkg.title }}</h3>
    <p>{{ pkg.price }}</p>
    <AppButton class="mt-2" label="កក់ឥឡូវនេះ" />
  </CardWrapper>
</template>
<script setup>
defineProps({
  pkg: Object
})
import CardWrapper from '@/components/common/CardWrapper.vue'
import AppButton from '@/components/common/AppButton.vue'
</script>
