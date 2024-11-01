<template>
  <div class="c-pokemon-options">
    <ul class="c-pokemon-options__list">
      <li v-for="pokemon in options" :key="pokemon.id" class="c-pokemon-options__item">
        {{ upperCaseFirst(pokemon.name) }}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "Pokemon Options",
  props: {
    options: {
      type: Array,
      Required: true,
      default: []
    }
  },
  methods: {
    upperCaseFirst(string) {
      const firstChar = string.slice(0, 1).toUpperCase()
      return `${firstChar}${string.slice(1)}`
    }
  }
}
</script>

<style scoped>
.c-pokemon-options {
  width: 250px;

  & .c-pokemon-options__list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    list-style: none;
    width: 100%;
  }

  & .c-pokemon-options__item {
    --background: var(--c-white);
    --color: var(--c-black);
    --hover: var(--c-grey);

    background-color: var(--background);
    border-radius: 5px;
    border: 1px solid var(--hover);
    color: var(--color);
    cursor: pointer;
    font-weight: 600;
    padding: 12px;
    text-align: center;
    transition: .3s;

    &:hover {
      background-color: var(--hover);
      border-color: var(--hover);
    }
  }

  & .c-pokemon-options__item--wrong {
    --background: var(--c-red-01);
    --color: var(--c-white);
    --hover: var(--c-red-01);
  }

  & .c-pokemon-options__item--correct {
    --background: var(--c-green-01);
    --color: var(--c-white);
    --hover: var(--c-green-01);
  }
}
</style>