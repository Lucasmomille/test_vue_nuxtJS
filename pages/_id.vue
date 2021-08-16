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
            <p class="absolute bottom-0">{{ vehicule.review_count }} avis</p>
          </div>
        </div>
        <IconId :vehicule="vehicule" />
      </div>
      <div class="flex flex-col w-3/12">
        <div class="mb-8 border border-gray-300 p-2 rounded-md">
          <p>A partir de {{ vehicule.starting_price }} €/jours</p>
          <ModalCalendar />
          <form action="get">
            <div role="group">
              <label for="date-from"></label>
              <input
                type="text"
                autocomplete="off"
                aria-label="Choississez une date de depart"
              />
            </div>
            <div role="group">
              <label for="date-to"></label>
              <input
                type="text"
                autocomplete="off"
                aria-label="Choississez une date de retour"
              />
            </div>
            <button class="rounded-md p-2 bg-green-300">
              Confirmer la location
            </button>
          </form>
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
import ModalCalendar from '@/components/ModalCalendar'
import { mapState } from 'vuex'

export default {
  components: {
    IconId,
    PageNotFound,
    ModalCalendar,
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

