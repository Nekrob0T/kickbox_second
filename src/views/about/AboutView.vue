<template>
  <base-block offset="responsive" class="content">
    <h1>Kim jestem?</h1>
    <p>
      Wierzę, że prawdziwy mistrz to nie ten, kto nigdy nie upadł — ale ten, kto zawsze wstaje. Mam na imię Piotr.
      Zaczynałem od zwykłych treningów w małej sali, z marzeniem, że kiedyś zawalczę o coś więcej. Przez lata
      przeszedłem drogę od amatora do mistrza świata w kickboxingu. W tej podróży najcenniejsze nie były medale — tylko
      ludzie, których spotkałem, i lekcje, które dał mi sport. Dziś chcę się tym dzielić. Z Tobą.
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
