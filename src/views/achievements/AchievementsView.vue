<template>
  <base-block offset="responsive" class="content">
    <h1>Najważniejsze sukcesy</h1>

    <div class="achievements">
      <base-block variant="tertiary" class="achievements__card" v-for="(item, i) in achievements" :key="i">
        <p>{{ item }}</p>
      </base-block>
    </div>
  </base-block>
</template>

<script setup lang="ts">
import { useMeta } from '@/composable/useMeta.ts';
import { BaseBlock } from '@/components/base';

const { titleAuthor } = useMeta();

const achievements = [
  '🥇 Mistrz Świata WAKO (Full Contact)',
  '🥇 Mistrz Europy ',
  '🥇 10x Mistrz Polski w Kickboxingu',
  '🇵🇱 Reprezentant Polski na mistrzostwach świata i Europy',
  '🥈 Wicemistrz Europy',
  '🏆 Laureat plebiscytu "Najlepszy sportowiec roku',
  '🥋 Trener i sędzia międzynarodowy',
];

titleAuthor('Najważniejsze sukcesy');
</script>

<style scoped lang="sass">
.achievements
  margin-top: 4rem
  display: flex
  flex-wrap: wrap
  gap: 1rem

  &__card
    flex-grow: 1
    font-size: 1.5rem

    p
      white-space: nowrap
</style>
