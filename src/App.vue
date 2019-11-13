<template>
  <div id="App">
    <div class="ForgeToDo">
      <ForgeInput />
      <div class="ForgeToDo__Heading">
        <img alt="Vue logo" src="./assets/logo.png" />
      </div>
      <ForgeToDoContainer />
      <ForgeControls />
    </div>
  </div>
</template>

<script>
import ForgeInput from "./components/ForgeInput.vue";
import ForgeControls from "./components/ForgeControls.vue";
import ForgeToDoContainer from "./components/ForgeToDoContainer.vue";

export default {
  name: "app",
  components: {
    ForgeInput,
    ForgeControls,
    ForgeToDoContainer,
  },
};
</script>

<style>
#App {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.ForgeToDo {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 100px auto;
  max-height: 500px;
  min-height: 500px;
  overflow: scroll;
  background-color: #eeeeee;
  box-shadow: -3px -2px 12px 1px rgba(189,191,192,0.8);
}

.ForgeToDo__Heading {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: linear-gradient(186deg, #40B883 0, #EEEEEE 81%)
}

.ForgeToDo__Heading img {
  height: 55px;
}

</style>
