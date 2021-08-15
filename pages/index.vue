<template>
  <div class="flex mx-auto w-11/12 justify-between">
    <div class="w-2/12">filtres</div>
    <div class="w-10/12 flex flex-wrap justify-between text-black">
      <Article
        v-for="(vehicule, index) in vehicules"
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

  computed: {
    ...mapState(['vehicules']),
  },
  mounted() {
    this.$store.dispatch('getVehicules')
  },
}
</script>
