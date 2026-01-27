<template>
  <button class="app-button bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600 transition-colors px-4 py-2 flex items-center justify-center gap-2">
    <slot />
    កក់ឥឡូវនេះ
  </button>
</template>

<script setup>
</script>

<style scoped>
.app-button {
  padding: 10px 16px;
  border-radius: 8px;
}
</style>
