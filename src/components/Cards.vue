<template>
  <div class="row" v-if="sub">
    <div class="col-lg-12 col-sm-12 col-md-12 mb-2">
      <div class="card">
        <h5 class="card-title">{{ sub.title }}</h5>
        <div class="text-center">
          <img
            :src="this.src"
            :width="sub.thumbnail_width"
            :height="sub.thumbnail_height"
            class="card-img-top"
            alt="..."
          />
        </div>
        <div class="card-body mt-2 mb-2">
          <div class="row justify-content-between">
            <div class="col-lg-8">
              <span>{{ (format_date(sub.created), showDate) }}</span>
            </div>
            <div class="col-lg-4 text-right">
              Upvote
              <span class="text-success">{{ sub.upvote_ratio }}</span>
            </div>
          </div>
          <a href="#">view more</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDate: null,
      src: ""
    };
  },
  props: {
    sub: {
      type: Object,
      required: false
    }
  },
  created() {
    this.checkForImg();
  },
  methods: {
    format_date(value) {
      const date = value;
      const data = new Date(date);
      const publishedYear = data.getFullYear();
      const publishedDate = data.getDate();
      const months = [
        "January",
        "Febraury",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      const publishedMonth = months[data.getMonth()];
      this.showDate = `${publishedMonth} ${publishedDate}, ${publishedYear}`;
    },
    checkForImg() {
      const img = this.sub.thumbnail;
      if (!this.validURL(img)) {
        this.src =
          "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F191120053137-03-milky-way-images-australia.jpg;";
        return false;
      } else {
        this.src = img;
        return true;
      }
    },
    validURL(img) {
      var pattern = new RegExp(
        "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
          "(\\#[-a-z\\d_]*)?$",
        "i"
      ); // fragment locator
      return !!pattern.test(img);
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  min-width: 80%;
  padding: 30px 30px 10px 30px;
  img {
    height: 30vh;
    object-fit: fill;
    margin: auto;
  }
  h1 {
    font-size: 16px;
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
