<template>
  <PokemonPage />
</template>

<script>
import PokemonPage from './pages/PokemonPage.vue'

export default {
  name: 'App',
  components: {
    PokemonPage
  }
}
</script>

<style>
:root {
  --c-black: #1f1f1f;
  --c-white: #fff;
  --c-grey: #cccccc;
  --c-purple-01: #0B0417;
  --c-purple-02: #291746;
  --c-red-01: #BD0C12;
  --c-green-01: #048733;

  --c-background: var(--c-purple-01);
  --c-text: var(--c-white);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  line-height: 100%;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

body {
  min-height: 100dvh;
  color: var(--c-text);
  background: radial-gradient(circle, var(--c-purple-02) 0%, var(--c-purple-01) 100%);
}

.o-title{
  font-size: 32px;
  margin-bottom: 12px;
}
</style>
