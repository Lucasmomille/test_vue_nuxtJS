<template>
  <div class="flex mx-8 justify-between">
    <div class="w-2/12 p-2 border border-gray-200 rounded-md mr-4">
      <p class="w-full text-center border-b border-green-200 pb-1 mb-4">
        Filtres
      </p>
      <label for="SearchLocation">Trouvez une ville !</label>
      <input
        v-model="searchLocation"
        type="text"
        placeholder="Ville"
        class="my-2 border border-gray-300 rounded-md shadox-sm p-2"
      />

      <label for="vol">Prix /j: {{ range }} €</label>
      <input
        v-model="range"
        type="range"
        min="50"
        max="100"
        step="2"
        class="bg-red-200"
      />
    </div>
    <div class="w-10/12 grid grid-cols-3 gap-4 text-black">
      <Article
        v-for="(vehicule, index) in filteredVehicles"
        :key="vehicule.id"
        :index="index"
        :vehicule="vehicule"
      >
      </Article>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Article from '@/components/Article'
import { mapState } from 'vuex'

export default {
  components: {
    Article,
  },
  data() {
    return {
      searchLocation: '',
      range: '100',
    }
  },

  computed: {
    ...mapState(['vehicules']),
    filteredVehicles: function () {
      return this.$store.state.vehicules
        .filter((vehicule) => {
          return vehicule.starting_price > 0 &&
            vehicule.starting_price < this.range
            ? vehicule
            : ''
        })
        .filter((vehicule) => {
          return vehicule.vehicle_location_city
            .toLowerCase()
            .match(this.searchLocation.toLowerCase())
        })
    },
  },

  mounted() {
    this.$store.dispatch('getVehicules')
  },
}
</script>
