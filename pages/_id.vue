<template>
  <div class="flex justify-between w-11/12">
    <div class="flex flex-col">
      <img src="" alt="" />
    </div>
    <div class="flex flex-col">
      <div>
        <p>A partir de €/jours</p>
        <p></p>
      </div>
      <div>Reassurance</div>
    </div>
  </div>
</template>

<script>
// get params and filter the json with id
export default {
  asyncData({ params }) {
    // called every time before loading the component
    return {
      id: params.id,
    }
  },
}
</script>
