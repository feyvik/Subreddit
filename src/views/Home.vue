<template>
  <div class="home">
    <div class="row justify-content-center align-items-start m-0 p-0">
      <div class="col-3"></div>
      <div class="col-6">
        <div class="row" v-for="sub in subraddit" :key="sub.id">
          <div class="col-12 md-4">
            <Cards :sub="sub" />
          </div>
        </div>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
import Cards from "../components/Cards.vue";
export default {
  name: "Home",
  components: {
    Cards
  },
  computed: {
    subraddit() {
      return this.$store.state.subraddit;
    }
  },
  created() {
    this.$store.dispatch("loadSubraddit");
  }
};
</script>
<style lang="scss" scoped>
.home {
  padding-top: 80px;
  padding-bottom: 40px;
}
</style>
