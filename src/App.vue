<template>
  <div id="app">
    <app-navigation></app-navigation>
    <router-view />
  </div>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
* {
  font-family: "Roboto", sans-serif;
  color: white;
}
body {
  background-color: rgb(52, 73, 94);
}
html {
  overflow-y: hidden;
}
</style>
<script>
import AppNavigation from "./components/AppNavigation";
export default {
  components: { AppNavigation }
};
</script>
