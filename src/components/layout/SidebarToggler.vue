<template>
  <q-btn dense flat round icon="menu" @click="toggleSidebar" />
</template>

<script setup lang="ts">
import { useLayout } from '@/stores/useLayout.ts'

const { toggleSidebar } = useLayout()
</script>

<style scoped lang="sass"></style>
