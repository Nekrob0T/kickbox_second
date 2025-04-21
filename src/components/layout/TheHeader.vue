<template>
  <q-header id="#header" class="header" reveal>
    <RouterLink :to="homeRoute"
      ><img src="@/assets/img/logo.svg" alt="Logo" :draggable="false"
    /></RouterLink>
    <nav v-if="isLargeScreen">
      <RouterLink :to="homeRoute">Strona główna</RouterLink>
      <q-btn-dropdown label="O mnie">
        <q-list>
          <q-item clickable v-close-popup>
            <router-link :to="aboutRoute">O mnie</router-link>
          </q-item>

          <q-item clickable v-close-popup>
            <router-link :to="achievementsRoute">Osiągnięcia</router-link>
          </q-item>

          <q-item clickable v-close-popup>
            <router-link :to="mediaRoute">W mediach</router-link>
          </q-item>
        </q-list>
      </q-btn-dropdown>
      <RouterLink :to="galleryRoute">Galeria</RouterLink>
      <RouterLink :to="offerRoute">Oferta</RouterLink>
    </nav>
    <sidebar-toggler v-else />
  </q-header>
</template>

<script setup lang="ts">
import { useScreen } from '@/composable/useScreen.ts';
import {
  homeRoute,
  aboutRoute,
  achievementsRoute,
  galleryRoute,
  mediaRoute,
  offerRoute,
} from '@/views';
import SidebarToggler from '@/components/layout/SidebarToggler.vue';

const { isLargeScreen } = useScreen();
</script>

<style scoped lang="sass">
.header
  width: 100%
  height: 56px
  background: var(--secondary-bg)
  padding: .5rem 1rem
  display: flex
  justify-content: space-between
  align-items: center
</style>
