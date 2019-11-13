<template>
  <div class="ForgeToDo__Controls">
    <div class="Icon" v-on:click="filterPriority" v-if="!todoLength">
      <i class="fas fa-filter"></i>
    </div>
    <div class="Icon" v-on:click="clearDone" v-if="!todoLength">
      <i class="fas fa-trash"></i>
    </div>
    <div class="Icon" v-on:click="showForm">
      <i v-if="hideForm" class="fas fa-plus"></i>
      <i v-if="!hideForm" class="fas fa-minus"></i>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ForgeControls",
  computed: mapState({
    hideForm: state => state.hideForm,
    todoLength: state => state.todos.length < 1,
  }),
  methods: {
    showForm() {
      this.$store.commit("showForm");
    },
    clearDone() {
      this.$store.commit("clearDone");
    },
    filterPriority() {
      this.$store.commit("filterPriority");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ForgeToDo__Controls {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  padding: 0 20px;
  display: flex;
  align-items: center;
  background: linear-gradient(186deg, #40B883 0, #EEEEEE 56%);
}
.ForgeToDo__Controls .Icon {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #40b883;
  height: 40px;
  width: 40px;
  border-radius: 50px;
  color: white;
  padding: 6px;
  margin-left: 15px;
}

.ForgeToDo__Controls .Icon i {
  font-size: 22px;
}
</style>
