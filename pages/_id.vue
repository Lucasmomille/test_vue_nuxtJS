<template>
  <div class="flex justify-between w-11/12">
    <div class="flex flex-col">
      <img src="" alt="" />
    </div>
    <div class="flex flex-col">
      <div>
        <p>A partir de €/jours</p>
        <p>{{ vehicule }}</p>
      </div>
      <div>Reassurance</div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  computed: {
    vehicule() {
      return this.$store.getters.getVehiculeById(this.$route.params.id)
    },
  },
}
</script>

