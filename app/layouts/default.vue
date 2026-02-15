<script setup lang="ts">
import AppHeader from "~/components/commons/AppHeader.vue"
import AppFooter from "~/components/commons/AppFooter.vue"
</script>

<template>
    <div class="w-full h-full flex flex-col justify-between">
        <AppHeader />
        <div class="w-full h-full overflow-auto">
            <NuxtPage />
        </div>
        <AppFooter />
    </div>
</template>