<template>
  <div class="powers">
    <base-block class="powers__card" variant="tertiary">
      <div class="powers__card-icon">🥇</div>
      <div class="powers__card-text">Mistrz świata</div>
    </base-block>
    <base-block class="powers__card" variant="tertiary">
      <div class="powers__card-icon">🧠</div>
      <div class="powers__card-text">Mentor i trener</div>
    </base-block>
    <base-block class="powers__card" variant="tertiary">
      <div class="powers__card-icon">🥊</div>
      <div class="powers__card-text">Ponad 30 lat w kickboxingu</div>
    </base-block>
  </div>
</template>

<script setup lang="ts">
import { BaseBlock } from '@/components/base';
</script>

<style scoped lang="sass">
.powers
  display: flex
  justify-content: space-between
  gap: 1.5rem
  align-items: center

  &__card
    display: flex
    justify-content: space-between
    align-items: center
    flex-direction: column
    gap: 1rem
    background: var(--tertiary-bg)
    flex-grow: 1
    text-align: center
    font-size: 1.5rem
</style>
