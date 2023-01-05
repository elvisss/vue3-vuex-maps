import { usePlacesStore, useMapStore } from './../../composables'
import { defineComponent, nextTick, onMounted, ref, watch } from 'vue'
import mapboxgl from 'mapbox-gl'

export default defineComponent({
  name: 'MapView',
  setup() {
    const mapElement = ref<HTMLDivElement>()
    const { userLocation, isUserLocationReady } = usePlacesStore()
    const { setMap } = useMapStore()

    const initMap = () => {
      if (!userLocation.value) throw new Error('location is needed')

      const map = new mapboxgl.Map({
        container: mapElement.value!, // container ID
        style: 'mapbox://styles/mapbox/light-v10', // style URL
        center: userLocation.value, // starting position [lng, lat]
        zoom: 15 // starting zoom
      })

      const myLocationPopUp = new mapboxgl.Popup({
        offset: [0, -45]
      }).setLngLat(userLocation.value).setHTML(`
          <h4>Here I am</h4>
          <p>Currently in Lima</p>
          <p>${userLocation.value}</p>
        `)

      const myLocationMarker = new mapboxgl.Marker()
        .setLngLat(userLocation.value)
        .setPopup(myLocationPopUp)
        .addTo(map)

      setMap(map)
    }

    onMounted(() => {
      nextTick(() => {
        if (isUserLocationReady.value) {
          return initMap()
        }
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
