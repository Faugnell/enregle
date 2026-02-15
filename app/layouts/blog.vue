<script setup lang="ts">
import AppHeader from "~/components/commons/AppHeader.vue"
import AppFooter from "~/components/commons/AppFooter.vue"
</script>

<template>
  <div class="blog">
    <AppHeader />
    <div class="blog__container">
      <slot />
    </div>
    <AppFooter />
  </div>
</template>
