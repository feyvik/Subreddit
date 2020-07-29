<template>
  <div class="card ">
    <h5 class="card-title">Card title</h5>
    <div class="text-center">
      <img src="../assets/image.jpg" class="card-img-top" alt="..." />
    </div>
    <div class="card-body mt-2 mb-2">
      <div class="row justify-content-between">
        <div class="col-lg-4"><span>29th july 2020</span></div>
        <div class="col-lg-4 text-right"><span>milk</span></div>
      </div>
      <a href="#">view more</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.card {
  min-width: 80%;
  padding: 30px 30px 10px 30px;
  img {
    width: 100%;
    height: 80vh;
    object-fit: fill;
    margin: auto;
  }
  span {
    font-size: 14px;
  }
  a {
    color: rgb(0, 110, 255);
    &:hover {
      text-decoration: none;
    }
  }
}
</style>
