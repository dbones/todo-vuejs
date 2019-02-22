<template>
  <div>
    <h3>What do you want to do next?</h3>

    <v-text-field v-model="newItemContent" label="Todo item"></v-text-field>
    <v-btn @click="addItem" color="success">Add</v-btn>

    <h3>Todo ({{items.length}} item{{items.length > 1 ? 's':''}})</h3>

    <v-card v-for="(item, index) in items">
      <div :class="[ item.isComplete ? 'strike' : 'no-strike' ]" style="padding: 15px; margin: 15px;">
        <h5>
        {{ item.content }} (<moment-ago :dateTime="item.dateTime"></moment-ago>)
        </h5>
        <div style="position: absolute;right: 30px;top: 0px;">
          <v-btn @click="deleteItem(item, index)" color="error">remove</v-btn>
          <v-btn @click="completeItem(item)" color="success">complete</v-btn>
        </div>
      </div>
    </v-card>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .strike {
    text-decoration-line: line-through;
  }
  .no-strike {
    text-decoration-line: none;
  }
</style>

<script lang="ts">
import Vue from "vue";
import { TodoItem } from "../models/TodoItem";
import Component from "vue-class-component";
import MomentAgo  from '../components/MomentAgo.vue';

@Component({
  components: {
    'moment-ago': MomentAgo
  }
})
export default class Todo extends Vue {
  items: Array<TodoItem> = [];
  newItemContent: string = "";

  addItem() {
    if (!this.newItemContent) return;
    let todo = new TodoItem();
    todo.content = this.newItemContent;
    this.items.push(todo);
    this.newItemContent = "";
  }

  deleteItem(item: TodoItem, index: number) {
    if (!item) return;

    this.items.splice(index, 1);

    //this.items = this.items.filter(i => {
    //    return i === item
    // });
  }

  copyItem(item: TodoItem) {
    if (!item) return;
    this.newItemContent = item.content;
  }

  completeItem(item: TodoItem) {
    if (!item) return;
    item.isComplete = true;
  }
}
</script>
