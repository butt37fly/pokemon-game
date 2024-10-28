<template>
  <h1>¿Quién es este Pokémon?</h1>

  <PokemonPicture />
  <PokemonOptions />
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