import { defineComponent, ref, watch } from "vue"
import type { Feature } from '@/interfaces/places'
import { usePlacesStore, useMapStore } from '@/composables'

export default defineComponent({
  name: 'SearchResults',
  setup() {
    const { isLoadingPlaces, places } = usePlacesStore()
    const { map, setPlaceMarkers } = useMapStore()
    const activePlace = ref<string>('')

    watch(places, (newPlaces) => {
      activePlace.value = ''
      setPlaceMarkers(newPlaces)
    })

    return {
      activePlace,
      places,
      isLoadingPlaces,
      onPlaceClick: (place: Feature) => {
        activePlace.value = place.id

        const [lng, lat] = place.center

        map.value?.flyTo({
          zoom: 14,
          center: [lng, lat]
        })
      }
    }
  }
})
