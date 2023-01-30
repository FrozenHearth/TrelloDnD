<template>
  <div class="card-container">
    <div class="card-body">
      <p>
        {{ item.text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    item: Object,
  },
};
</script>

<style scoped>
.card-container {
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  width: 100%;
  border-radius: 3px;
  cursor: pointer;
  margin-bottom: 2rem;
}
.card-body {
  padding: 1rem 2rem;
}
p {
  font-size: 1.6rem;
}
</style>
