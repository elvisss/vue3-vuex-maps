import type { MutationTree } from 'vuex'
import type { PlacesState } from './state'

const mutation: MutationTree<PlacesState> = {
  setLngLat(state: PlacesState, { lng, lat }: { lng: number; lat: number }) {
    state.userLocation = [lng, lat]
    state.isLoading = false
  }
}

export default mutation
