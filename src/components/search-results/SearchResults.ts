import { defineComponent, ref } from 'vue'
import type { Feature } from '@/interfaces/places'
import { usePlacesStore, useMapStore } from '@/composables'

export default defineComponent({
  name: 'SearchResults',
  setup() {
    const { isLoadingPlaces, places } = usePlacesStore()
    const { map } = useMapStore()
    const activePlace = ref<string>('')

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
