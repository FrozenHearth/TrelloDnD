<template>
  <div class="card-list-container">
    <Card />
    <Card />
  </div>
</template>

<script>
import Card from "./Card";
export default {
  name: "CardList",
  components: {
    Card,
  },
};
</script>

<style scoped>
.card-list-container {
  display: flex;
  flex-direction: column;
  width: 18%;
  max-width: 18%;
  flex: 0 0 18%;
  border: 1px solid #dcebf4;
  border-radius: 6px;
  padding: 1rem 1rem 0 1rem;
  margin-top: 5rem;
}
</style>
