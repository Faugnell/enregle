<script setup lang="ts">
const appConfig = useAppConfig();
</script>

<template>
    <UApp :toaster="appConfig.toaster">
        <NuxtRouteAnnouncer />
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </UApp>
</template>