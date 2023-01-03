import type { Module } from 'vuex'
import type { StateInterface } from '../index'

import state from './state'
import type { MapState } from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const mapModule: Module<MapState, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
}

export default mapModule
