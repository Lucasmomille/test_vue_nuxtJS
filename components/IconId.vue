<template>
  <div
    class="
      mt-12
      flex
      justify-between
      w-full
      overflow-scroll
      md:overflow-auto
      pb-4
      space-x-4
      md:space-x-0
    "
  >
    <div class="2/12 text-center">
      <img
        src="~assets/images/seat-belt.svg"
        alt="seat belt icon"
        class="w-6 mx-auto"
      />
      <p>
        {{ vehicule.vehicle_seats }} places <br />
        avec ceinture
      </p>
    </div>
    <div class="2/12 text-center">
      <img
        src="~assets/images/bed.svg"
        alt="seat belt icon"
        class="w-6 mx-auto"
      />
      <p>
        {{ vehicule.vehicle_beds }} places <br />
        couchages
      </p>
    </div>
    <div class="2/12 text-center">
      <img
        src="~assets/images/steering-wheel.svg"
        alt="bed icon"
        class="w-6 mx-auto"
      />
      <p>
        3500kg <br />
        Permis B
      </p>
    </div>
    <div class="2/12 text-center">
      <img
        src="~assets/images/earth.svg"
        alt="earth icon"
        class="w-6 mx-auto"
      />
      <p>
        Voyage à l'étranger <br />
        autorisé
      </p>
    </div>
    <div class="2/12 text-center">
      <img
        src="~assets/images/races-speed.svg"
        alt="race-speed icon"
        class="w-6 mx-auto"
      />
      <p>
        km illimité <br />
        non autorisé
      </p>
    </div>
    <div class="2/12 text-center">
      <img src="~assets/images/paw.svg" alt="paw icon" class="w-6 mx-auto" />
      <p>
        Animaux <br />
        autorisé
      </p>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  props: {
    vehicule: {
      type: Object,
      required: true,
    },
  },
}
</script>