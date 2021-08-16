<template>
  <div class="relative mt-2">
    <vc-date-picker v-model="range" :value="null" is-dark is-range>
      <template #default="{ inputValue, inputEvents, isDragging }">
        <div class="flex flex-col sm:flex-row justify-start items-center">
          <div class="relative flex-grow">
            <img
              src="~assets/images/calendar.svg"
              alt="calendar"
              class="text-gray-600 w-4 h-full mx-2 absolute pointer-events-none"
            />
            <input
              class="flex-grow pl-8 pr-2 py-1 bg-gray-100 border rounded w-full"
              :class="isDragging ? 'text-gray-600' : 'text-gray-900'"
              :value="inputValue.start"
              v-on="inputEvents.start"
            />
          </div>
          <span class="flex-shrink-0 m-2">
            <svg
              class="w-4 h-4 stroke-current text-gray-600"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </span>
          <div class="relative flex-grow">
            <img
              src="~assets/images/calendar.svg"
              alt="calendar"
              class="text-gray-600 w-4 h-full mx-2 absolute pointer-events-none"
            />
            <input
              class="flex-grow pl-8 pr-2 py-1 bg-gray-100 border rounded w-full"
              :class="isDragging ? 'text-gray-600' : 'text-gray-900'"
              :value="inputValue.end"
              v-on="inputEvents.end"
            />
          </div>
        </div>
      </template>
    </vc-date-picker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      range: {
        start: new Date(),
        end: new Date(),
      },
    }
  },
}
</script>