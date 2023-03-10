import type { Module } from 'vuex'
import type { StateInterface } from '../index'

import state from './state'
import type { PlacesState } from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const placesModule: Module<PlacesState, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
}

export default placesModule
