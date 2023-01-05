import type { Feature } from "./../../interfaces/places"
export interface PlacesState {
  isLoading: boolean
  userLocation?: [number, number] // lng, lat
  places: Array<Feature>
}

function state(): PlacesState {
  return {
    isLoading: true,
    userLocation: undefined,
    places: []
  }
}

export default state
