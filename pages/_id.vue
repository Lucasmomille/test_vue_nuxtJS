<template>
  <div class="w-full">
    <div v-if="vehicule" class="flex justify-center w-11/12">
      <div class="flex flex-col w-9/12 mx-8">
        <img
          :src="vehicule.pictures[0].url"
          alt="photo du vehicule"
          class="w-9/12 h-96 object-cover rounded-md mb-8"
        />

        <div class="flex w-full">
          <img
            :src="vehicule.vehicle_owner_picture_url"
            alt="photo propriétaire"
            class="w-32 h-32 object-cover mr-6"
          />
          <div class="flex flex-col relative">
            <h2 class="text-lg mb-4">{{ vehicule.title }}</h2>
            <p>{{ vehicule.vehicle_location_city }}</p>
            <div class="absolute bottom-0 flex">
              <div class="flex mr-4">
                <ReviewStars v-for="index in 5" :key="index" />
              </div>

              <span>{{ vehicule.review_count }} avis</span>
            </div>
          </div>
        </div>
        <IconId :vehicule="vehicule" />
      </div>
      <div class="flex flex-col w-3/12">
        <div class="mb-8 border border-gray-300 p-2 rounded-md flex flex-col">
          <p>A partir de {{ vehicule.starting_price }} €/jours</p>
          <Calendar />
          <button
            class="rounded-md p-2 mt-8 bg-green-300 text-white self-center"
            @submit.prevent
          >
            Confirmer la location
          </button>
        </div>
        <div class="border border-gray-300 p-2 rounded-md">Reassurance</div>
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

