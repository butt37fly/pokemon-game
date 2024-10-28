<template>
  <div class="c-pokemon-picture">
    <img class="c-pokemon-picture__img c-pokemon-picture__img--shape"
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
      alt="pokemon picture">
    <img class="c-pokemon-picture__img c-pokemon-picture__img--visible"
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
      alt="pokemon picture">
  </div>
</template>

<script>
export default {
  name: "Pokemon Picture",
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
    object-fit: contain;
    opacity: 0;
    position: absolute;
    user-select: none;
    width: var(--width);
  }

  & .c-pokemon-picture__img--shape {
    filter: brightness(0);
    opacity: 1;
  }

  & .c-pokemon-picture__img--visible {
    animation: fadeIn .3s forwards;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>