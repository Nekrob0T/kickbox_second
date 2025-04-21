<template>
  <q-layout view="hHr lpR fFr">
    <the-header />
    <the-sidebar />

    <q-page-container>
      <div class="main-container">
        <router-view />
      </div>
    </q-page-container>

    <the-footer />
  </q-layout>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import TheHeader from '@/components/layout/TheHeader.vue';
import TheSidebar from '@/components/layout/TheSidebar.vue';
import TheFooter from '@/components/layout/TheFooter.vue';
</script>

<style scoped lang="sass">
.main-container
  max-width: var(--app-max-width)
  margin: 2rem auto
</style>
