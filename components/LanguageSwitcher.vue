<template>
  <div class="flex space-x-2">
    <button
      v-for="locale in availableLocales"
      :key="locale.code"
      @click="switchLanguage(locale.code)"
      class="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300"
      :class="{ 'font-bold': locale.code === $i18n.locale }"
    >
      {{ locale.name }}
    </button>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useRouter, useRoute } from 'vue-router'
import { useLocalePath } from '#imports'

const { locale, locales } = useI18n()
const router = useRouter()
const route = useRoute()
const localePath = useLocalePath()

const switchLanguage = async (code) => {
  // Change the locale
  locale.value = code
  
  // Get the name of the current route
  const currentRouteName = route.name?.toString().split('___')[0]
  
  // If we have a route name, use it to generate the new path
  if (currentRouteName) {
    const newPath = localePath(currentRouteName)
    await router.push(newPath)
  } else {
    // If we don't have a route name (e.g., on the home page), just use the new locale
    await router.push(`/${code}`)
  }
}

const availableLocales = computed(() => {
  return locales.value
})
</script>