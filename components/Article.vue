<template>
  <NuxtLink
    to="/"
    class="w-4/12 mb-6 border border-green-300 transform scale-x-95"
  >
    <article id="`${{}}`" class="rounded-md overflow-hidden w-full">
      <img src="" alt="photo véhicule" />
      <div class="flex flex-col p-2">
        <div class="flex">
          <h2>{{ title }}</h2>
          <p>{{ price }}€/j</p>
        </div>
        <p>{{ location }}</p>
        <p>
          <span> {{ places }} places</span>
          <span> {{ couch }} couchages</span>
          <span> {{ rate }} etoiles</span>
        </p>
      </div>
    </article>
  </NuxtLink>
</template>


<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
}
</script>