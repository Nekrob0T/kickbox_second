<template>
  <base-block offset="responsive" class="content">
    <home-main />
    <home-motivation />
    <home-powers />
    <home-contact />
  </base-block>
</template>

<script setup lang="ts">
import { BaseBlock } from '@/components/base';
import { HomePowers, HomeContact, HomeMotivation, HomeMain } from '@/components/home';
</script>

<style scoped lang="sass">
.content
  display: flex
  flex-direction: column
  gap: 3rem
</style>
