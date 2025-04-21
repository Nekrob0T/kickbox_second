<template>
  <base-block offset="responsive" class="content">
    <h1>Współpraca i treningi</h1>

    <h3>Oferuję:</h3>
    <div class="offer">
      <div class="offer__options">
        <div class="offer__option">🔹 Treningi personalne z zakresu kickboxingu, samoobrony i ogólnej sprawności</div>
        <div class="offer__option">🔹 Seminaria i warsztaty motywacyjne</div>
        <div class="offer__option">🔹 Szkolenia dla klubów i trenerów</div>
        <div class="offer__option">🔹 Wystąpienia gościnne – eventy sportowe, konferencje, szkoły</div>
      </div>

      <h4>Chcesz trenować z mistrzem? <a href="mailto:kontakt@piotrsiegoczynski.pl">Napisz do mnie mailowo</a></h4>
    </div>
  </base-block>
</template>

<script setup lang="ts">
import { BaseBlock } from '@/components/base';
import { useMeta } from '@/composable/useMeta.ts';

const { titleAuthor } = useMeta();

titleAuthor('Współpraca i treningi');
</script>

<style scoped lang="sass">
h3
  margin: 1.5rem 0

.offer
  display: flex
  flex-direction: column
  gap: 2rem

  &__options
    display: flex
    flex-direction: column
    gap: 1.5rem
</style>
