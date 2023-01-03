import type { GetterTree } from 'vuex'
import type { MapState } from './state'
import type { StateInterface } from '../index'

const getters: GetterTree<MapState, StateInterface> = {
  isMapReady(state) {
    return !!state.map
  }
}

export default getters
