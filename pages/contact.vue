<template>
    <div class="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-screen">
      <h1 class="text-4xl font-bold mb-4 text-center">{{ $t('contact') }}</h1>
      <p class="mb-4 text-center">{{ $t('contactText') }}</p>
      <nuxt-link :to="localePath('index')" class="text-blue-500 hover:underline">
        {{ $t('home') }}
      </nuxt-link>
    </div>
  </template>