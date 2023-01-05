import { defineComponent, ref, watch } from "vue"
import type { Feature } from '@/interfaces/places'
import { usePlacesStore, useMapStore } from '@/composables'
import type { LngLat } from '@/store/map/actions'

export default defineComponent({
  name: 'SearchResults',
  setup() {
    const { isLoadingPlaces, places, userLocation } = usePlacesStore()
    const { map, setPlaceMarkers, getRouteBetweenPoints, setRoutePolyline } = useMapStore()
    const activePlace = ref<string>('')

    watch(places, (newPlaces) => {
      activePlace.value = ''
      setPlaceMarkers(newPlaces)
    })

    return {
      activePlace,
      places,
      isLoadingPlaces,
      onGetDirections: async(end: LngLat) => {
        if (!userLocation.value) return
        await getRouteBetweenPoints(userLocation.value, end)
      },
      onPlaceClick: (place: Feature) => {
        activePlace.value = place.id
        map.value?.flyTo({
          zoom: 14,
          center: place.center
        })
      }
    }
  }
})
