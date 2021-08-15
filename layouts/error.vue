<template>
  <div class="w-9/12 bg-gray-300 text-white text-center p-4 mx-auto">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
export default {
  layout: 'error',
  props: ['error'],
  // you can set a custom layout for the error page
}
</script>
