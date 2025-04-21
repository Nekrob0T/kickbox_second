<template>
  <div class="motivation">
    <img src="@/assets/img/training.jpg" alt="" :draggable="false" />
    <h2 class="motivation__text">
      Mistrz nie rodzi się na ringu<br />
      –<br />
      mistrz rodzi się na treningu.
    </h2>
  </div>
</template>

<style scoped lang="sass">
.motivation
  height: 400px
  position: relative
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  text-align: center
  padding: 1.5rem

  &__text
    position: relative
    z-index: 1
    font-size: 3rem

  img
    filter: brightness(.5)
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 400px
</style>
