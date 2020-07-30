<template>
  <div class="row" v-if="sub">
    <div class="col-lg-12 col-sm-12 col-md-12">
      <div class="card">
        <h5 class="card-title">{{ sub.data.title }}</h5>
        <div class="text-center">
          <img
            :src="sub.data.thumbnail"
            :width="thumbnail_width"
            :height="thumbnail_height"
            class="card-img-top"
            alt="..."
          />
        </div>
        <div class="card-body mt-2 mb-2">
          <div class="row justify-content-between">
            <div class="col-lg-4">
              <span>29th july 2020</span>
            </div>
            <div class="col-lg-4 text-right"><span>milk</span></div>
          </div>
          <a href="#">view more</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sub: {
      type: Array,
      required: false
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  min-width: 80%;
  padding: 30px 30px 10px 30px;
  img {
    width: 100%;
    // height: 80vh;comm
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
