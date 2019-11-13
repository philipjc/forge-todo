<template>
  <div class="ForgeToDo__InputForm" v-bind:class="{ hidden: hideForm }">
    <input id="forgeInput" :value="message" v-on:keyup="updateInput" type="text" />
    <div class="priority-field">
      <input v-on:click="updatePriority" type="checkbox" />
      <span>Higher priority?</span>
    </div>
    <button v-on:click="add">Add Todo Item</button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ForgeInput",
  computed: mapState({
    hideForm: state => state.hideForm,
    message: state => state.message,
    priority: state => state.priority,
    errorMessage: state => state.errorMessage,
  }),
  methods: {
    add() {
      this.$store.commit("addTodo");
      this.$store.commit("changeMessage", { text: "" });
    },
    updateInput(e) {
      this.$store.commit("changeMessage", { text: e.target.value });
    },
    updatePriority(e) {
      this.$store.commit("updatePriority", { priority: e.target.checked });
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ForgeToDo__InputForm {
  position: absolute;
  background: #777;
  top: 0;
  bottom: 0;
  width: 285px;
  display: flex;
  flex-direction: column;
  padding: 100px 20px;
  transition: 0.6s ease;
  opacity: 1;
  z-index: 2;
}
.ForgeToDo__InputForm input {
  border: none;
  background: #777;
  border-bottom: 2px solid #40b883;
  color: white;
  margin-bottom: 10px;
  padding: 5px;
  font-size: 20px;
}

.ForgeToDo__InputForm .priority-field {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 2px solid #40b883;
  margin-top: 10px;
}

.ForgeToDo__InputForm button {
  color: white;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  padding: 12px 90px;
  background-color: #40b883;
  margin-top: 40px;
}
.ForgeToDo__InputForm.hidden {
  visibility: hidden;
  opacity: 0;
}
</style>
