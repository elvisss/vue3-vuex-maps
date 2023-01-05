import type { ActionTree } from 'vuex'
import type { PlacesState } from './state'
import type { StateInterface } from '../index'
import type { Feature, PlacesResponse } from '@/interfaces/places'
import { searchApi } from '@/apis'
import { promise } from '@/utils/promise'

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

  async searchPlacesByTerm({ commit, state }, query: string): Promise<Feature[]> {
    if (!query) {
      commit('setPlaces', [])
      return []
    }

    if (!state.userLocation) {
      throw new Error('there is no user location')
    }

    commit('setLoadingPlaces', true)

    await promise(2000)

    const { data } = await searchApi.get<PlacesResponse>(`/${query}.json`, {
      params: {
        proximity: state.userLocation?.join(',')
      }
    })

    commit('setPlaces', data.features)
    commit('setLoadingPlaces', false)

    return data.features
  }
}

export default actions
