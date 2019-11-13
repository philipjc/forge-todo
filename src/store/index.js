import Vue from "vue";
import Vuex from "vuex";
import store2 from "store2";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: "",
    priority: false,
    todos: store2("todos") || [],
    hideForm: true
  },
  mutations: {
    addTodo(state) {
      if (!state.message) {
        return;
      }
      state.todos = [
        {
          value: this.state.message,
          id: this.state.todos.length + 1,
          completed: false,
          priority: state.priority
        },
        ...state.todos
      ];
      state.hideForm = !state.hideForm;
      state.message = "";
      store2.set("todos", state.todos);
    },
    deleteTodo(state, todo) {
      const { id } = todo;
      const newTodos = state.todos.filter(item => item.id !== id);
      state.todos = newTodos;
      store2.set("todos", [...newTodos]);
    },
    changeMessage(state, payload) {
      state.message = payload.text;
    },
    updatePriority(state, payload) {
      state.priority = payload.priority;
    },
    showForm() {
      this.state.hideForm = !this.state.hideForm;
    },
    complete(state, todo) {
      const newTodos = state.todos.map(todoItem => {
        if (todoItem.id === todo.id) {
          return { ...todo, completed: !todoItem.completed };
        }
        return todoItem;
      });
      state.todos = [...newTodos];
    },
    clearDone(state) {
      const newTodos = state.todos.filter(item => {
        return !item.completed;
      });
      state.todos = [...newTodos];
      store2.set("todos", [...newTodos]);
    },
    filterPriority(state) {
      const newTodos = state.todos.sort((a, b) => {
        return a === b ? 0 : a ? -1 : 1;
      });
      state.todos = [...newTodos];
    }
  },
  actions: {},
  modules: {}
});
