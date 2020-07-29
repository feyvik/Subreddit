<template>
  <div class="home">
    <div class="row justify-content-center align-items-start m-0 p-0">
      <div class="col-lg-3"></div>
      <div class="col-lg-6">
        <div class="row">
          <div class="col-12">
            <Cards />
          </div>
        </div>
      </div>
      <div class="col-lg-3"></div>
    </div>
  </div>
</template>

<script>
import Cards from "../components/Cards.vue";
export default {
  name: "Home",
  components: {
    Cards
  }
};
</script>
<style lang="scss" scoped>
.home {
  padding-top: 80px;
  padding-bottom: 40px;
}
</style>
