<template>
  <div class="card-list-container">
    <Container
      drag-class="card-ghost"
      drop-class="card-ghost-drop"
      :drop-placeholder="dropPlaceholderOptions"
      :get-child-payload="getChildPayload1"
      group-name="1"
      @drop="onDrop('listOne', $event)"
    >
      <Draggable v-for="(item, $index) in listOne" :key="$index">
        <Card :item="item" />
      </Draggable>
    </Container>
    <Container
      drag-class="card-ghost"
      drop-class="card-ghost-drop"
      :drop-placeholder="dropPlaceholderOptions"
      :get-child-payload="getChildPayload2"
      group-name="1"
      @drop="onDrop('listTwo', $event)"
    >
      <Draggable v-for="(item, $index) in listTwo" :key="$index">
        <Card :item="item" />
      </Draggable>
    </Container>
    <Container
      drag-class="card-ghost"
      drop-class="card-ghost-drop"
      :drop-placeholder="dropPlaceholderOptions"
      :get-child-payload="getChildPayload3"
      group-name="1"
      @drop="onDrop('listThree', $event)"
    >
      <Draggable v-for="(item, $index) in listThree" :key="$index">
        <Card :item="item" />
      </Draggable>
    </Container>
    <Container
      drag-class="card-ghost"
      drop-class="card-ghost-drop"
      :drop-placeholder="dropPlaceholderOptions"
      :get-child-payload="getChildPayload4"
      group-name="1"
      @drop="onDrop('listFour', $event)"
    >
      <Draggable v-for="(item, $index) in listFour" :key="$index">
        <Card :item="item" />
      </Draggable>
    </Container>
  </div>
</template>

<script>
import { Container, Draggable } from 'vue-smooth-dnd';
import { applyDrag } from '../utils/applyDrag';
import Card from './Card';
export default {
  name: 'CardList',
  components: {
    Card,
    Container,
    Draggable,
  },
  data() {
    return {
      dropPlaceholderOptions: {
        className: 'drop-preview',
        animationDuration: '150',
        showOnTop: false,
      },
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
    getChildPayload1(index) {
      return this.listOne[index];
    },
    getChildPayload2(index) {
      return this.listTwo[index];
    },
    getChildPayload3(index) {
      return this.listThree[index];
    },
    getChildPayload4(index) {
      return this.listFour[index];
    },
  },
};
</script>

<style scoped>
.card-list-container {
  display: flex;
  justify-content: space-between;
  min-height: 100vh;
}
.smooth-dnd-container {
  width: 20vw;
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
@media screen and (max-width: 1024px) {
  .smooth-dnd-container {
    width: 25vw;
  }
}
@media screen and (max-width: 769px) {
  .card-list-container {
    display: block;
  }
  .smooth-dnd-container {
    width: auto;
    max-width: 100%;
  }
}
</style>
