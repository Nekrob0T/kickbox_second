<template>
  <img src="@/assets/img/other_life.jpg" alt="" :draggable="false" class="other-life" />
</template>

<style scoped lang="sass">
.other-life
  --motivation-height: 400px

  width: 100%
  height: var(--motivation-height)

  @media screen and (max-width: 600px)
    --motivation-height: 200px
</style>
