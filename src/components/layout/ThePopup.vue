<template>
  <div class="popup" v-if="layout.popup">
    <div class="popup__overlay"></div>
    <q-icon class="popup__close" name="close" @click="layout.closePopup()" />
    <div class="popup__modal">
      <gallery-card :item="layout.popup" is-wide />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLayout } from '@/stores/useLayout.ts';
import GalleryCard from '@/components/gallery/GalleryCard.vue';
import { computed } from 'vue';

const layout = useLayout();

const temp = computed(() => {
  console.log('shit');
  return layout.popup;
});
</script>

<style scoped lang="sass">
.popup
  width: 100vw
  height: 100vh
  position: fixed
  z-index: 10000
  display: flex
  justify-content: center
  align-items: center

  &__close
    position: absolute
    font-size: 4rem
    right: 2rem
    top: 2rem
    z-index: 10
    cursor: pointer

  &__overlay
    width: 100vw
    height: 100vh
    position: fixed
    background: var(--primary-bg)
    opacity: .7
</style>
