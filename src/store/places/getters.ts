import type { GetterTree } from 'vuex'
import type { PlacesState } from './state'
import type { StateInterface } from '../index'

const getters: GetterTree<PlacesState, StateInterface> = {
  someGetter(/* state */) {
    // return true;
  }
}

export default getters
