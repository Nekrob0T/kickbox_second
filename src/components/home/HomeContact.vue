<template>
  <div class="contact">
    <div class="contact__block">
      <h3>Chcesz dowiedzieć się więcej?</h3>
      <base-button label="Poznaj moją historię" :to="aboutRoute"></base-button>
    </div>
    <div class="contact__block">
      <h3>Chcesz uczyć się od najlepszych?</h3>
      <base-button label="Umów się na trening" :to="offerRoute"></base-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { aboutRoute, offerRoute } from '@/views';
import { BaseButton } from '@/components/base';
</script>

<style scoped lang="sass">
.contact
  display: flex
  flex-direction: column
  gap: 2rem

  &__block
    display: flex
    flex-direction: column
    gap: 1rem

    @media screen and (min-width: 480px)
      :deep(.q-btn)
        width: 250px
</style>
