<template>
  <div class="flex mx-auto w-11/12 justify-between">
    <div class="w-2/12">filtres</div>
    <div class="w-10/12 flex flex-wrap justify-between text-black">
      <Article
        v-for="(van, index) in vans"
        :id="van.id"
        :key="van.id"
        :index="index"
        :title="van.title"
        :location="van.vehicle_location_city"
        :price="van.starting_price"
        :src="van.pictures[0].url"
        :places="van.vehicle_seats"
        :beds="van.vehicle_beds"
        :rate="van.review_count"
      >
      </Article>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Article from '@/components/Article'

import axios from 'axios'
export default {
  components: {
    Article,
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
}
</script>
