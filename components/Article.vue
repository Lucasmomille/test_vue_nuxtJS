<template>
  <NuxtLink
    :to="'/' + vehicule.id"
    class="rounded-md overflow-hidden mb-6 border border-gray-300 shadow-md"
  >
    <article class="w-full">
      <img
        :src="vehicule.pictures[`${imageIndex}`].url"
        alt="photo véhicule"
        class="object-cover h-52 w-full"
        @error="displayFallbackImage"
      />
      <div class="flex flex-col p-2">
        <div class="flex justify-between">
          <h2 class="font-bold mb-1">{{ vehicule.title }}</h2>
          <p>{{ vehicule.starting_price }}€/j</p>
        </div>
        <p>{{ vehicule.vehicle_location_city }}</p>
        <p class="flex w-full relative mt-2">
          <span class="mr-2"> {{ vehicule.vehicle_seats }} places</span>
          <span> {{ vehicule.vehicle_beds }} couchages</span>

          <span class="flex absolute right-1">
            <ReviewStars v-for="index in 5" :key="index" />
          </span>
        </p>
      </div>
    </article>
  </NuxtLink>
</template>


<script>
import ReviewStars from '@/components/ReviewStars'
export default {
  components: {
    ReviewStars,
  },
  props: {
    vehicule: {
      type: Object,
      required: true,
    },
  },
  data: () => {
    return {
      imageIndex: 0,
    }
  },

  methods: {
    displayFallbackImage() {
      this.imageIndex++
    },
  },
}
</script>