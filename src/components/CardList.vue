<template>
  <div class="card-list-container">
    <Container 
      :drag-class="dragClass"
      :drop-class="dropClass"
      :drop-placeholder="dropPlaceholderOptions"
      :get-child-payload="getChildPayload"
      group-name="1"
      @drop="onDrop"
    >
      <Draggable v-for="(item, index) in list" :key="index">
        <Card :item="item" />
      </Draggable>
    </Container>
  </div>
</template>

<script>
import { Container, Draggable } from "vue-smooth-dnd";
import { applyDrag } from "../utils/applyDrag";
import Card from "./Card";

export default {
  name: "CardList",
  components: {
    Card,
    Container,
    Draggable,
  },
  data() {
    return {
      dragClass: "card-ghost",
      dropClass: "card-ghost-drop",
      dropPlaceholderOptions: {
        className: "drop-preview",
        animationDuration: "150",
        showOnTop: false,
      },
      list: [
        {
          id: 0,
          text: "List 1 Text 0",
        },
        {
          id: 1,
          text: "List 1 Text 1",
        },
        {
          id: 2,
          text: "List 1 Text 2",
        },
        {
          id: 3,
          text: "List 1 Text 3",
        },
      ],
    };
  },
  methods: {
    onDrop(dropResult) {
      this.list = applyDrag(this.list, dropResult);
    },
    getChildPayload(index) {
      return this.list[index];
    },
  },
};
</script>

<style scoped>
.card-list-container {
  display: flex;
  justify-content: space-evenly;
}
.smooth-dnd-container {
  display: flex;
  flex-direction: column;
  width: 40%;
  max-width: 40%;
  flex: 0 0 40%;
  height: 100%;
  border: 1px solid #dcebf4;
  border-radius: 6px;
  padding: 1rem 1rem 0 1rem;
  margin-top: 5rem;
  margin-right: 2.5rem;
  margin-left: 1rem;
}
.card-ghost {
  transition: transform 0.18s ease;
  transform: rotateZ(5deg);
}
.card-ghost-drop {
  transition: transform 0.18s ease-in-out;
  transform: rotateZ(0deg);
}
</style>
