import type { ActionTree } from 'vuex'
import type { MapState } from './state'
import type { StateInterface } from '../index'
import { directionApi } from '@/apis'
import type { DirectionsResponse } from '@/interfaces/directions'

export type LngLat = [ number, number ]

const actions: ActionTree<MapState, StateInterface> = {
  async getRouteBetweenPoints({ commit }, { start, end }: { start: LngLat, end: LngLat}) {
    const { data } = await directionApi.get<DirectionsResponse>(`${start.join(',')};${end.join(',')}`)
    commit('setDistanceDuration', {
      distance: data.routes[0].distance,
      duration: data.routes[0].duration
    })
    commit('setRoutePolyline', data.routes[0].geometry.coordinates)
  }
}

export default actions
