<template>
  <header class="w-full p-4 border-b-2 border-green-300 mb-12 cursor-default">
    <div class="md:w-3/12 w-5/12 ml-4">
      <nuxt-link to="/">
        <LogoYescapa />
      </nuxt-link>
    </div>
  </header>
</template>

<script>
/* eslint-disable */
import LogoYescapa from '@/components/LogoYescapa'
export default {
  components: {
    LogoYescapa,
  },
}
</script>
