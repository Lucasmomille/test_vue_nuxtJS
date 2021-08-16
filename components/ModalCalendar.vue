<template>
  <div class="relative">
    <button
      v-if="!toggleModal"
      class="p-2 bg-green-300 text-white rounded-md hover:bg-green-200"
      @click="toggleModal = !toggleModal"
    >
      Open
    </button>
    <button
      v-else
      class="p-2 bg-green-300 text-white rounded-md hover:bg-green-200"
      @click="toggleModal = !toggleModal"
    >
      Close
    </button>
    <div v-if="toggleModal" class="absolute z-40 w-24 h-24 -bottom-24">
      <vc-calendar />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggleModal: false,
    }
  },
}
</script>