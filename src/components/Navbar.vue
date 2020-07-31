<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="shadow fixed-top">
      <b-navbar-brand href="#">SUB-REDDIT</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-form-input
            class="mr-2 form-control"
            placeholder="Search"
            type="text"
            v-model="search"
          ></b-form-input>
          <b-button class="my-2 my-sm-0" type="submit" @click="loadSubraddit()"
            >Search</b-button
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: ""
    };
  },
  methods: {
    loadSubraddit() {
      this.$store.dispatch("loadSubraddit", this.search);
    }
  }
};
</script>
<style lang="scss" scoped>
nav {
  background: rgb(65, 0, 65);
}
a {
  font-weight: bold;
  text-decoration: none;
}
</style>
