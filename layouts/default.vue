<template>
    <div class="min-h-screen flex flex-col">
      <header class="bg-gray-100 p-4">
        <div class="container mx-auto flex justify-between items-center">
          <h1 class="text-2xl font-bold">{{ $t('home') }}</h1>
          <LanguageSwitcher />
        </div>
      </header>
      <main class="flex-grow">
        <slot />
      </main>
      <footer class="bg-gray-100 p-4 mt-8">
        <div class="container mx-auto text-center">
          &copy; 2024 Nuxt i18n Base Project
        </div>
      </footer>
    </div>
  </template>
  
  <script setup>
  import LanguageSwitcher from '~/components/LanguageSwitcher.vue'
  </script>