<template>
  <div class="ForgeToDo__Body">
    <div class="ForgeToDo__List">
      <p v-if="todoLength">No Forge Todos, Forge one!</p>
      <ForgeToDo 
        v-for="item in todos" 
        v-bind:todo="item" 
        v-bind:key="item.id"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ForgeToDo from "./ForgeToDo";

export default {
  name: "ForgeToDoContainer",
  components: {
    ForgeToDo
  },
  computed: mapState({
    todos: state => state.todos,
    hideForm: state => state.hideForm,
    todoLength: state => state.todos.length < 1,
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ForgeToDo__Body {
  flex: 1;
  position: relative;
  max-height: 310px;
  overflow: scroll;
}

.ForgeToDo__List {
  display: flex;
  flex-direction: column;
}

.ForgeToDo__InputForm {
  position: absolute;
  background: #777;
  top: 0;
  bottom: 0;
  width: 285px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  transition: .6s ease;
  opacity: 1;
}
.ForgeToDo__InputForm input {
  border: none;
  background: #777;
  border-bottom: 3px solid #40b883;
  color: white;
  margin-bottom: 10px;
  padding: 5px;
  font-size: 20px;
}
.ForgeToDo__InputForm button {
  color: white;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  padding: 12px 90px;
  background-color: #40b883;
}
.ForgeToDo__InputForm.hidden {
  visibility: hidden;
  opacity: 0;
}
</style>
