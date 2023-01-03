import type mapboxgl from 'mapbox-gl'
import type { MutationTree } from 'vuex'
import type { MapState } from './state'

const mutation: MutationTree<MapState> = {
  setMap(state, map: mapboxgl.Map) {
    state.map = map
  }
}

export default mutation
