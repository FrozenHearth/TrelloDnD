<template>
  <div class="card-list-container">
    <Container @drop="onDrop('listOne', $event)">
      <Draggable v-for="item in listOne" :key="item.id">
        <Card :item="item" />
      </Draggable>
    </Container>
    <Container @drop="onDrop('listTwo', $event)">
      <Draggable v-for="item in listTwo" :key="item.id">
        <Card :item="item" />
      </Draggable>
    </Container>
    <Container @drop="onDrop('listThree', $event)">
      <Draggable v-for="item in listThree" :key="item.id">
        <Card :item="item" />
      </Draggable>
    </Container>
    <Container @drop="onDrop('listFour', $event)">
      <Draggable v-for="item in listFour" :key="item.id">
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
      listOne: [
        {
          id: 0,
          text: `List 1 Text 0`,
        },
        {
          id: 1,
          text: `List 1 Text 1`,
        },
        {
          id: 2,
          text: `List 1 Text 2`,
        },
        {
          id: 3,
          text: `List 1 Text 3`,
        },
      ],
      listTwo: [
        {
          id: 0,
          text: `List 2 Text 0`,
        },
        {
          id: 1,
          text: `List 2 Text 1`,
        },
        {
          id: 2,
          text: `List 2 Text 2`,
        },
        {
          id: 3,
          text: `List 2 Text 3`,
        },
      ],
      listThree: [
        {
          id: 0,
          text: `List 3 Text 0`,
        },
        {
          id: 1,
          text: `List 3 Text 1`,
        },
        {
          id: 2,
          text: `List 3 Text 2`,
        },
        {
          id: 3,
          text: `List 3 Text 3`,
        },
      ],
      listFour: [
        {
          id: 0,
          text: `List 4 Text 0`,
        },
        {
          id: 1,
          text: `List 4 Text 1`,
        },
        {
          id: 2,
          text: `List 4 Text 2`,
        },
        {
          id: 3,
          text: `List 4 Text 3`,
        },
      ],
    };
  },
  methods: {
    onDrop(collection, dropResult) {
      this[collection] = applyDrag(this[collection], dropResult);
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
</style>
