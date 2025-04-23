<template>
  <div class="motivation">
    <img src="@/assets/img/training.jpg" alt="" :draggable="false" />
    <h2 class="motivation__text">
      Nie urodziłem się mistrzem<br />
      –<br />
      stałem się nim.
    </h2>
  </div>
</template>

<style scoped lang="sass">
.motivation
  --motivation-height: 400px

  height: var(--motivation-height)
  position: relative
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  text-align: center
  padding: 1.5rem

  @media screen and (max-width: 600px)
    --motivation-height: 200px

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
    height: var(--motivation-height)
</style>
