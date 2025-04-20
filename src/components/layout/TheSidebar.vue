<template>
  <q-drawer v-model="sidebar" side="right" behavior="mobile">
    <!-- drawer content -->
  </q-drawer>
</template>

<script setup lang="ts">
import { useLayout } from '@/stores/useLayout.ts'

const { sidebar } = useLayout()
</script>

<style scoped lang="sass"></style>
