<template>
  <q-drawer v-model="layout.sidebar" side="right" behavior="mobile">
    <!-- drawer content -->
  </q-drawer>
</template>

<script setup lang="ts">
import { useLayout } from '@/stores/useLayout.ts';

const layout = useLayout();
</script>

<style scoped lang="sass"></style>
