import type { Feature } from '@/interfaces/places'
export interface PlacesState {
  isLoading: boolean
  userLocation?: [number, number] // lng, lat
  isLoadingPlaces: boolean
  places: Array<Feature>
}

function state(): PlacesState {
  return {
    isLoading: true,
    userLocation: undefined,
    isLoadingPlaces: false,
    places: []
  }
}

export default state
