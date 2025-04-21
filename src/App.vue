<template>
  <q-layout view="hHr lpR fFr">
    <the-header />
    <the-sidebar />
    <the-popup v-if="layout.popup" />

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
import { TheHeader, TheSidebar, TheFooter, ThePopup } from '@/components/layout';
import { useLayout } from '@/stores/useLayout.ts';

const layout = useLayout();
</script>

<style scoped lang="sass">
.main-container
  max-width: var(--app-max-width)
  margin: 2rem auto
</style>
