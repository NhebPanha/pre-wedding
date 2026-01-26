<template>
  <div class="section-title">
    <h2>
      <slot />
    </h2>
  </div>
</template>

<script setup>
</script>

<style scoped>
.section-title {
  margin-bottom: 24px;
}

.section-title h2 {
  font-size: 28px;
  font-weight: 600;
}
</style>
