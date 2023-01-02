import type { ActionTree } from 'vuex'
import type { PlacesState } from './state'
import type { StateInterface } from '../index'

const actions: ActionTree<PlacesState, StateInterface> = {
  getInitialLocation({ commit }) {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => commit('setLngLat', { lat: coords.latitude, lng: coords.longitude }),
      (err) => {
        console.log({ err })
        throw new Error('no geolocation')
      }
    )
  }
}

export default actions
