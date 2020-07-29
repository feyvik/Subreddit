<template>
  <div id="app">
    <div id="nav">
      <Navbar />
    </div>
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "app",
  components: {
    Navbar
  }
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic|Material+Icons");
#app {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 400;
  width: 100%;
  min-height: 100vh;
  background: #efefef;
}
</style>
