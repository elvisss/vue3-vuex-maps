import type mapboxgl from 'mapbox-gl'
import { computed } from 'vue'
import { useStore } from 'vuex'
import type { StateInterface } from '@/store'
import type { Feature } from '@/interfaces/places'
import type { LngLat } from '@/store/map/actions'

export const useMapStore = () => {
  const store = useStore<StateInterface>()

  return {
    map: computed(() => store.state.map.map),
    distance: computed(() => store.state.map.distance),
    duration: computed(() => store.state.map.duration),

    // getters
    isMapReady: computed(() => store.getters['map/isMapReady']),

    // mutations
    setMap: (map: mapboxgl.Map) => store.commit('map/setMap', map),
    setPlaceMarkers: (places: Feature[]) =>
      store.commit('map/setPlaceMarkers', places),

    // actions
    getRouteBetweenPoints: (start: LngLat, end: LngLat) =>
      store.dispatch('map/getRouteBetweenPoints', { start, end })
  }
}
