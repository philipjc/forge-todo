<template>
  <div class="ForgeToDo__Item">
    <span class="completeIcon" v-on:click="complete(todo)">
      <i v-if="todo.completed" class="fas fa-check-circle"></i>
      <i v-if="!todo.completed" class="far fa-circle"></i>
    </span>
    <span class="todo-value" v-bind:class="{ completed: todo.completed }">{{ todo.value }} <i v-if="todo.priority" class="fas fa-exclamation"></i></span>
    <span class="deleteIcon" v-on:click="deleteTodo(todo)">
      <i class="far fa-times-circle"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "ForgeToDo",
  props: {
    todo: {
      type: Object
    }
  },
  methods: {
    complete(todo) {
      this.$store.commit("complete", todo);
    },
    deleteTodo(todo) {
      this.$store.commit("deleteTodo", todo);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ForgeToDo__Item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  border-bottom: 1px solid #40b883;
}

.ForgeToDo__Item .todo-value {
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
}

.ForgeToDo__Item .todo-value i {
  color: tomato;
  font-size: 16px;
}

.ForgeToDo__Item .completeIcon,
.deleteIcon {
  cursor: pointer;
}

.ForgeToDo__Item i {
  color: #40b883;
  font-size: 22px;
}

.ForgeToDo__Item span {
  padding: 10px 20px;
}

.ForgeToDo__Item span.completed {
  text-decoration: line-through;
}
</style>
