<script setup lang="ts">
definePageMeta({ layout: 'blog' })
const { data: posts } = await useAsyncData('blog-posts', async () => {
  return await queryCollection('blog')
    .order('date', 'DESC')
    .all()
})
</script>

<template>
  <main>
    <div class="blog-hero">
      <h1>Blog</h1>
      <p>Guides simples pour rester en règle en micro-entreprise.</p>
    </div>


    <div class="bloglist">
      <article v-for="post in posts" :key="post.path" class="postcard">
        <NuxtLink :to="post.path" style="text-decoration:none; color:inherit;">
          <h2 class="postcard__title">{{ post.title }}</h2>
        </NuxtLink>
        <p class="postcard__meta" v-if="post.date">
          {{ new Date(post.date).toLocaleDateString('fr-FR') }}
        </p>
        <p class="postcard__desc">{{ post.description }}</p>
      </article>
    </div>
  </main>
</template>

