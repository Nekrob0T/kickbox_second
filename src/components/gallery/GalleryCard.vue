<template>
  <div class="card" :class="{ wide: isWide }" @click="layout.setPopup(item)">
    <img class="card__img" :src="item.src" alt="" />

    <div class="card__caption">
      <p>{{ item.title }}</p>
      <a :href="item.link" target="_blank"><img src="@/assets/img/open-in-new.svg" alt="" /></a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLayout } from '@/stores/useLayout.ts';

const layout = useLayout();

interface Item {
  title: string;
  src: string;
  link: string;
}

const props = defineProps<{ item: Item; isWide?: boolean }>();
</script>

<style scoped lang="sass">
.card
  $s: &

  --w: 245px
  --a: 1 / 1
  width: var(--w)
  aspect-ratio: var(--a)
  border-radius: 12px
  position: relative
  transition: transform .3s

  &:hover
    cursor: pointer
    transform: scale(1.03)

    #{$s}__caption
      display: flex

  &__wrapper
    width: 100vw
    height: 100vh

  &__img
    width: var(--w)
    aspect-ratio: var(--a)

  &__caption
    display: flex
    justify-content: space-between
    align-items: center
    z-index: 1
    position: absolute
    width: 100%
    height: 2rem
    padding: .25rem
    bottom: 0
    left: 0
    background: var(--primary-bg)
    opacity: .8

    a
      width: 12px
      height: 12px

  &.wide
    --w: 60vw
    --a: 3 / 2

    &:hover
      cursor: default
      transform: none

    @media screen and (max-width: 600px)
      --w: 100vw

    #{$s}__caption
      display: flex
</style>
