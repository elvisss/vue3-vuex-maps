import type { ActionTree } from 'vuex'
import type { PlacesState } from './state'
import type { StateInterface } from '../index'

const actions: ActionTree<PlacesState, StateInterface> = {
  someAction(/*{ commit }, payload  */) {
    // a line to prevent linter errors
  }
}

export default actions
