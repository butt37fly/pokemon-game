<template>
  <h1>Hello World</h1>
</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style>
:root {
  --c-black: #1f1f1f;
  --c-white: #fff;
  --c-grey: #cccccc;
  --c-purple-01: #0B0417;
  --c-purple-02: #291746;

  --c-background: var(--c-purple-01);
  --c-text: var(--c-white);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  line-height: 1.1rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

body {
  min-height: 100dvh;
  color: var(--c-text);
  background: radial-gradient(circle, var(--c-purple-02) 0%, var(--c-purple-01) 100%);
}
</style>
