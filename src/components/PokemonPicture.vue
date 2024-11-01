<template>
  <div class="c-pokemon-picture">
    <img :class="{ 'c-pokemon-picture__img': true, 'c-pokemon-picture__img--visible': showPokemon }" :src="imgSrc"
      alt="pokemon picture">
  </div>
</template>

<script>
export default {
  name: "Pokemon Picture",
  props: {
    pokemonId: {
      type: Number,
      required: true,
      default: 1
    },
    showPokemon: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
    }
  }
}
</script>

<style scoped>
.c-pokemon-picture {
  --width: 250px;
  align-items: center;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  position: relative;
  width: var(--width);

  & .c-pokemon-picture__img {
    aspect-ratio: 1 !important;
    filter: brightness(0);
    object-fit: contain;
    position: absolute;
    user-select: none;
    width: var(--width);
  }

  & .c-pokemon-picture__img--visible {
    animation: fadeIn .3s forwards;
  }
}

@keyframes fadeIn {
  0% {
    filter: brightness(0);
  }

  100% {
    filter: brightness(1);
  }
}
</style>