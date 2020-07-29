<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="shadow fixed-top">
      <b-navbar-brand href="#">SUB-REDDIT</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" class="m-auto"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              class="mr-2 form-control"
              placeholder="Search"
              type="text"
            ></b-form-input>
            <b-button class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
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
