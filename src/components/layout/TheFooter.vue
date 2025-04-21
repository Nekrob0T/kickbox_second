<template>
  <q-footer class="footer">
    <div class="footer__title">
      <h4>Skontaktuj się ze mną</h4>
      <p>Masz pytania? Chcesz zaprosić mnie na wydarzenie, przeprowadzić trening lub podjąć współpracę?</p>
    </div>
    <div class="footer__description">
      <p>📩 E-mail: <a href="mailto:kontakt@piotrsiegoczynski.pl">kontakt@piotrsiegoczynski.pl</a></p>
      <p>📱 Telefon: <a href="tel:+48123456789">+48 123 456 789</a></p>
      <p>📍 Warszawa</p>
    </div>
  </q-footer>
</template>

<script setup lang="ts"></script>

<style scoped lang="sass">
.footer
  width: 100%
  background: var(--secondary-bg)
  padding: 2rem
  display: flex
  justify-content: space-between
  gap: 2rem
  border-top: 1px solid var(--tertiary-bg)

  &__title,
  &__description
    display: flex
    flex-direction: column
    gap: 1rem
    justify-content: space-between

  &__description p
    white-space: nowrap
</style>
