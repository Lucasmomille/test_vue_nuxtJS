<template>
  <NuxtLink
    :to="'/' + id"
    class="
      rounded-md
      overflow-hidden
      w-4/12
      mb-6
      border border-gray-300
      shadow-md
      transform
      scale-x-95
    "
  >
    <article class="w-full">
      <img :src="src" alt="photo véhicule" class="object-cover h-52 w-full" />
      <div class="flex flex-col p-2">
        <div class="flex justify-between">
          <h2 class="">{{ title }}</h2>
          <p>{{ price }}€/j</p>
        </div>
        <p>{{ location }}</p>
        <p>
          <span> {{ places }} places</span>
          <span> {{ beds }} couchages</span>
          <span class="flex items-center">
            {{ rate }} avis
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 fill-current text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
          </span>
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
    id: {
      type: Number,
      required: true,
    },
    src: {
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
    places: {
      type: Number,
      required: true,
    },
    beds: {
      type: Number,
      required: true,
    },
    rate: {
      type: Number,
      required: true,
    },
  },
}
</script>