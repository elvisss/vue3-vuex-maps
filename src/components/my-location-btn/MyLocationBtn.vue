<template>
  <button
    v-if="isButtonReady"
    @click="onMyLocationClick"
    class="btn btn-primary"
  >
    Go to my location
  </button>
</template>

<script lang="ts">
import { useMapStore, usePlacesStore } from '@/composables'
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'MyLocationBtn',
  setup() {
    const { userLocation, isUserLocationReady } = usePlacesStore()
    const { map, isMapReady } = useMapStore()

    return {
      isButtonReady: computed<boolean>(
        () => isUserLocationReady.value && isMapReady.value
      ),

      onMyLocationClick: () => {
        map.value?.flyTo({
          center: userLocation.value,
          zoom: 14
        })
      }
    }
  }
})
</script>

<style scoped>
button {
  position: fixed;
  top: 30px;
  right: 30px;
}
</style>
