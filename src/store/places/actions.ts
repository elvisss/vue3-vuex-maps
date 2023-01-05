import type { ActionTree } from 'vuex'
import type { PlacesState } from './state'
import type { StateInterface } from '../index'
import type { PlacesResponse } from './../../interfaces/places'
import { searchApi } from '@/apis'

const actions: ActionTree<PlacesState, StateInterface> = {
  getInitialLocation({ commit }) {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) =>
        commit('setLngLat', { lat: coords.latitude, lng: coords.longitude }),
      (err) => {
        console.log({ err })
        throw new Error('no geolocation')
      }
    )
  },

  async searchPlacesByTerm({ commit, state }, query: string) {
    const { data } = await searchApi.get<PlacesResponse>(`/${query}.json`, {
      params: {
        proximity: state.userLocation?.join(',')
      }
    })
    commit('setPlaces', data.features)
  }
}

export default actions
