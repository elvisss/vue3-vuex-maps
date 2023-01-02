import { createStore } from 'vuex'

import placesModule from './places'
import type { PlacesState } from './places/state'

export interface StateInterface {
  places: PlacesState
}

export default createStore<StateInterface>({
  modules: {
    places: placesModule
  }
})
