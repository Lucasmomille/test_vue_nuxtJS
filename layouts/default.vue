<template>
  <div class="p-2 min-h-screen font-roboto">
    <Header />
    <Nuxt />
  </div>
</template>

<script>
/* eslint-disable */
import Header from '@/components/Header'
export default {
  head: {
    link: [
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'default',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap',
      },
    ],
  },
  components: {
    Header,
  },
}
</script>