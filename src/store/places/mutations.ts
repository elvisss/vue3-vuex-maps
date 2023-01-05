import type { MutationTree } from 'vuex'
import type { PlacesState } from './state'
import type { Feature } from './../../interfaces/places'

const mutation: MutationTree<PlacesState> = {
  setLngLat(state: PlacesState, { lng, lat }: { lng: number; lat: number }) {
    state.userLocation = [lng, lat]
    state.isLoading = false
  },

  setPlaces(state: PlacesState, places: Feature[]) {
    state.places = places
  }
}

export default mutation
