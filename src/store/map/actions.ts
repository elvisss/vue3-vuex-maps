import type { ActionTree } from 'vuex'
import type { MapState } from './state'
import type { StateInterface } from '../index'

const actions: ActionTree<MapState, StateInterface> = {
  someAction(/*{ commit }, payload  */) {
    // a line to prevent linter errors
  }
}

export default actions
