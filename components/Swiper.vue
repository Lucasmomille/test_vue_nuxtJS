<template>
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div
        v-for="picture in vehicule.pictures"
        :key="picture.id"
        class="swiper-slide"
      >
        <img
          class="h-80 w-full object-cover"
          :src="picture.url"
          alt="picture"
        />
      </div>
    </div>
    <div class="swiper-pagination"></div>
    <div slot="button-prev" class="swiper-button-prev"></div>
    <div slot="button-next" class="swiper-button-next"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  /* props: {
    pictures: {
      type: Array,
      required: true,
    },
  }, */
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },

  computed: {
    vehicule() {
      return this.$store.getters.getVehiculeById(this.$route.params.id)
    },
    pictures() {
      return this.$store.getters.getPictureOfVehicle(this.$route.params.id)
    },
    ...mapState(['vehicules']),
  },

  mounted() {
    this.$store.dispatch('getVehicules')
    this.mySwiper.slideTo(1, 1000, false)
  },
}
</script>