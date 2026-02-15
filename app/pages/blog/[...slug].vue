<script setup lang="ts">
definePageMeta({ layout: 'blog' })

const route = useRoute()

const { data: page } = await useAsyncData(route.path, async () => {
  return await queryCollection('blog').path(route.path).first()
})

useSeoMeta({
  title: page.value?.title ?? 'Article — EnRègle',
  description: page.value?.description ?? 'Article du blog EnRègle.'
})
</script>

<template>
  <main>
    <div v-if="page" class="prose">
      <ContentRenderer :value="page" />
      <!-- CTA -->
      <div class="cta">
        <p class="cta__title">Recevoir les rappels automatiques</p>
        <p style="margin:0 0 10px; font-weight:800;">
          EnRègle vous prévient avant chaque échéance (URSSAF, CFE, etc.).
        </p>
        <NuxtLink class="cta__btn" to="/">Rejoindre la liste d’attente</NuxtLink>
      </div>
    </div>

    <div v-else class="prose">
      <h1>Article introuvable</h1>
      <NuxtLink to="/blog">Retour au blog</NuxtLink>
    </div>
  </main>
</template>

