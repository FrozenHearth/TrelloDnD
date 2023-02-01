<template>
  <div id="app">
    <CardList />
  </div>
</template>

<script>
import CardList from './components/CardList.vue';

export default {
  name: 'App',
  components: {
    CardList,
  },
};
</script>

<style>
body {
  background: #f6f9fc;
}
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
:root {
  font-size: 10px;
}
.drop-preview {
  background-color: rgba(150, 150, 200, 0.1);
  margin: 1rem 2rem 1rem 0.3rem;
}
</style>
