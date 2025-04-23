<template>
  <div class="contact">
    <div class="contact__block">
      <h3>Chcesz dowiedzieć się więcej?</h3>
      <base-button label="Zobacz osiągnięcia" :to="achievementsRoute" />
    </div>
    <div class="contact__block">
      <h3>Chcesz uczyć się od najlepszych?</h3>
      <base-button label="Umów się na trening" :to="offerRoute" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { achievementsRoute, offerRoute } from '@/views';
import { BaseButton } from '@/components/base';
</script>

<style scoped lang="sass">
.contact
  display: flex
  justify-content: space-between
  flex-wrap: wrap
  gap: 2rem

  h3
    font-size: 2rem

  &__block
    display: flex
    flex-direction: column
    gap: 1.5rem
    flex-grow: 1

    :deep(.q-btn)
      width: 100%

    @media screen and (min-width: 480px)
      :deep(.q-btn)
        width: 250px
</style>
