import { usePlacesStore } from './../../composables/usePlacesStore'
import { defineComponent, nextTick, onMounted, ref, watch } from 'vue'
import mapboxgl from 'mapbox-gl'

export default defineComponent({
  name: 'MapView',
  setup() {
    const mapElement = ref<HTMLDivElement>()
    const { userLocation, isUserLocationReady } = usePlacesStore()

    const initMap = () => {
      Promise.resolve()

      const map = new mapboxgl.Map({
        container: mapElement.value!, // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: userLocation.value, // starting position [lng, lat]
        zoom: 15 // starting zoom
      })
    }

    onMounted(() => {
      nextTick(() => {
        if (isUserLocationReady.value) {
          return initMap()
        }
        console.log('No user location')
      })
    })

    watch(isUserLocationReady, (_old, _newValue) => {
      nextTick(() => {
        if (isUserLocationReady.value) {
          initMap()
        }
      })
    })

    return {
      isUserLocationReady,
      mapElement
    }
  }
})
