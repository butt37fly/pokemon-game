<template>
  <section class="c-pokemon-page">
    <h1 class="o-title">¿Quién es este Pokémon?</h1>

    <PokemonPicture :pokemonId="2" :showPokemon="true" />
    <PokemonOptions :options="pokemons" />
  </section>
</template>

<script>
import PokemonOptions from '@/components/PokemonOptions.vue'
import PokemonPicture from '@/components/PokemonPicture.vue'

import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
  name: "Pokemon Page",
  components: {
    PokemonPicture,
    PokemonOptions
  },
  data() {
    return {
      pokemons: []
    }
  },
  methods: {
    async getPokemons() {
      this.pokemons = await getPokemonOptions()
    }
  },
  mounted() {
    this.getPokemons()
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