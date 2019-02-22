<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title router-link to="/" class="headline text-uppercase">
        <span>Todo</span>
        <span class="font-weight-light">Example</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      
      <v-btn flat router-link to="/todo">
        <span class="mr-2">Todo</span>
      </v-btn>


      <v-btn flat router-link to="/about">
        <span class="mr-2">About</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <div class="container">
        <router-view></router-view>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import Todo from "./views/Todo.vue";

export default {
  name: "App",
  components: {
    Todo
  },
  data() {
    return {
      //
    };
  }
};
</script>
