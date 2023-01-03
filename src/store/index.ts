import { createStore } from 'vuex'

import mapModule from './map'
import placesModule from './places'
import type { MapState } from './map/state'
import type { PlacesState } from './places/state'

export interface StateInterface {
  places: PlacesState
  map: MapState
}

export default createStore<StateInterface>({
  modules: {
    places: placesModule,
    map: mapModule
  }
})
