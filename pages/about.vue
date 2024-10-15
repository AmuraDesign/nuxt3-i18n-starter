<template>
  <div class="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-screen">
    <h1 class="text-4xl font-bold mb-4 text-center">{{ $t('about') }}</h1>
    <p class="mb-4 text-center">{{ $t('aboutText') }}</p>
    <div class="flex space-x-4">
      <nuxt-link :to="localePath('index')" class="text-blue-500 hover:underline">
        {{ $t('home') }}
      </nuxt-link>
      <nuxt-link :to="localePath('contact')" class="text-blue-500 hover:underline">
        {{ $t('contact') }}
      </nuxt-link>
    </div>
  </div>
</template>