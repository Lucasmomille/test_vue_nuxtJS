<template>
  <Layout>
    <div class="container w-9/12 flex flex-wrap text-black">
      <div v-for="van in vans" :key="van.id" class="w-3/12">
        <p>{{ van.title }}</p>
      </div>
    </div>
  </Layout>
</template>

<script>
/* eslint-disable */
import Article from '@/components/Article'
import Layout from '@/components/Layout'
import axios from 'axios'
export default {
  components: {
    Article,
    Layout,
  },
  async asyncData() {
    const { data } = await axios.get(
      'https://gitlab.com/api/v4/snippets/2095016/raw'
    )

    console.log(data.results[0])

    return {
      vans: data.results,
    }

    /* .then((res) => {
        console.log(JSON.parse(res.data.results))
        return {
          vans: res.data.results,
        }
      })
      .catch((error) => {
        console.log(error)
      }) */
  },
  data: {},
}
</script>
