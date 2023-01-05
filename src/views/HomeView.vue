<template>
  <MapView />
  <MyLocationBtn />
  <SearchBar />
  <TripDetails />
</template>

<script lang="ts">
import { usePlacesStore } from '@/composables';
import { defineComponent, defineAsyncComponent  } from 'vue'

export default defineComponent({
  name: 'Home',
  components: {
    MapView: defineAsyncComponent(() => import('@/components/mapview/MapView.vue')),
    MyLocationBtn: defineAsyncComponent(() => import('@/components/my-location-btn/MyLocationBtn.vue')),
    SearchBar: defineAsyncComponent(() => import('@/components/searchbar/SearchBar.vue')),
    TripDetails: defineAsyncComponent(() => import('@/components/trip-details/TripDetails.vue')),
  },
  setup() {
    usePlacesStore()
  }
})
</script>
