<template>
  <section class="c-pokemon-page">
    <h1 class="o-title">¿Quién es este Pokémon?</h1>

    <PokemonPicture />
    <PokemonOptions />
  </section>
</template>

<script>
import PokemonOptions from '@/components/PokemonOptions.vue'
import PokemonPicture from '@/components/PokemonPicture.vue'

export default {
  name: "Pokemon Page",
  components: {
    PokemonPicture,
    PokemonOptions
  }
}
</script>

<style scoped>
.c-pokemon-page {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  min-height: 100dvh;
  width: 100%;
}
</style>