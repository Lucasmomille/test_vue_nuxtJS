<template>
  <div class="w-full">
    <div
      v-if="vehicule"
      class="flex flex-col lg:flex-row lg:justify-center w-11/12 mx-auto"
    >
      <div class="flex flex-col lg:w-9/12 w-full lg:mx-8">
        <img
          :src="vehicule.pictures[0].url"
          alt="photo du vehicule"
          class="lg:w-11/12 lg:h-96 object-cover w-full h-80 rounded-md mb-8"
        />

        <div class="flex w-full">
          <img
            :src="vehicule.vehicle_owner_picture_url"
            alt="photo propriétaire"
            class="lg:w-32 lg:h-32 w-12 h-12 object-cover mr-6"
          />
          <div class="flex flex-col relative">
            <h2 class="text-lg lg:mb-4 mb-1">{{ vehicule.title }}</h2>
            <p>{{ vehicule.vehicle_location_city }}</p>
            <span
              v-if="hover"
              class="bg-green-400 rounded-md w-2/12 text-center text-white ml-9"
              >{{ vehicule.review_average }}</span
            >
            <div class="lg:absolute bottom-0 flex lg:mt-0 mt-2">
              <div
                class="flex mr-4 cursor-pointer"
                @mouseover="hover = true"
                @mouseleave="hover = false"
              >
                <ReviewStars v-for="index in 5" :key="index" />
              </div>
              <span>{{ vehicule.review_count }} avis</span>
            </div>
          </div>
        </div>
        <IconId :vehicule="vehicule" />
      </div>
      <div class="flex flex-col lg:w-3/12 w-full mt-4 lg:mt-0">
        <div class="mb-8 border border-gray-300 p-2 rounded-md flex flex-col">
          <p>A partir de {{ vehicule.starting_price }} €/jours</p>
          <Calendar />
          <button
            class="
              rounded-md
              p-2
              mt-8
              bg-green-400
              text-white
              self-center
              hover:bg-green-300
            "
            @submit.prevent
          >
            Confirmer la location
          </button>
        </div>
        <div class="border border-gray-300 p-2 rounded-md h-96 text-center">
          <p class="mt-16">Reassurance</p>
        </div>
      </div>
    </div>

    <div v-else>
      <PageNotFound />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import IconId from '@/components/IconId'
import PageNotFound from '@/components/PageNotFound'
import Calendar from '@/components/Calendar'
import ReviewStars from '@/components/ReviewStars'
import { mapState } from 'vuex'

export default {
  data() {
    return {
      hover: false,
    }
  },
  components: {
    IconId,
    PageNotFound,
    Calendar,
    ReviewStars,
  },

  computed: {
    vehicule() {
      return this.$store.getters.getVehiculeById(this.$route.params.id)
    },
    ...mapState(['vehicules']),
  },

  mounted() {
    this.$store.dispatch('getVehicules')
  },
}
</script>
