<template>
  <CardWrapper>
    <img :src="pkg.image" />
    <h3>{{ pkg.title }}</h3>
    <p>{{ pkg.price }}</p>
    <AppButton label="កក់ឥឡូវនេះ" />
  </CardWrapper>
</template>

<script setup>
defineProps({
  pkg: Object
})

import CardWrapper from '@/components/common/CardWrapper.vue'
import AppButton from '@/components/common/AppButton.vue'
</script>
