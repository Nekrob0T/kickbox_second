<template>
  <base-block variant="tertiary">
    <h2>Etapy kariery</h2>
    <div class="storytelling">
      <div class="storytelling__story" v-for="(item, i) in stories" :key="i">{{ item }}</div>
    </div>
  </base-block>
</template>

<script lang="ts" setup>
import { BaseBlock } from '@/components/base';

const stories = [
  '1980: Rozpoczęcie treningów kickboxingu w KS Piaseczno.',
  '1985: Pierwsze sukcesy na krajowych zawodach.',
  '1990: Zdobycie tytułu Mistrza Europy.',
  '1995: Pierwszy tytuł Mistrza Świata.',
  '2000: Założenie własnej szkoły kickboxingu.',
  '2010: Objęcie funkcji Prezesa Polskiego Związku Kickboxingu.',
  '2020: Uhonorowanie za całokształt kariery sportowej.',
];
</script>

<style scoped lang="sass">
h2
  margin-bottom: 3rem

.storytelling
  display: flex
  flex-direction: column
  gap: 1.5rem
</style>
