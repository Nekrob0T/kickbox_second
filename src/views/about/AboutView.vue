<template>
  <base-block offset="responsive" class="content">
    <h1>Moja droga do mistrzostwa</h1>
    <p>
      Nazywam się Piotr Siegoczyński. Kickboxing to nie tylko moja pasja, to całe moje życie. Od ponad 30 lat jestem
      związany ze sportami walki – jako zawodnik, reprezentant Polski, a obecnie także trener i mentor. Na swoim koncie
      mam m.in. tytuł Mistrza Świata WAKO, wielokrotne Mistrzostwo Polski oraz udział w międzynarodowych galach i
      turniejach. Dziś dzielę się zdobytym doświadczeniem z kolejnymi pokoleniami sportowców, ucząc ich, że w drodze do
      sukcesu nie ma dróg na skróty — są tylko trening, konsekwencja i wiara w siebie.
    </p>
  </base-block>
</template>

<script setup lang="ts">
import { BaseBlock } from '@/components/base';
import { useMeta } from '@/composable/useMeta.ts';

const { titleAuthor } = useMeta();

titleAuthor('Moja droga do mistrzostwa');
</script>

<style scoped lang="sass">
p
  margin-top: 3rem
  font-size: 1.5rem
  line-height: 2rem
</style>
