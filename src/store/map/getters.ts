import type { GetterTree } from 'vuex'
import type { MapState } from './state'
import type { StateInterface } from '../index'

const getters: GetterTree<MapState, StateInterface> = {
  someGetter(/* state */) {
    // return true;
  }
}

export default getters
