import type { Feature } from '@/interfaces/places'
import mapboxgl from 'mapbox-gl'
import type { MutationTree } from 'vuex'
import type { MapState } from './state'

const mutation: MutationTree<MapState> = {
  setMap(state, map: mapboxgl.Map) {
    state.map = map
  },

  setPlaceMarkers(state, places: Feature[]) {
    // clean markers
    state.markers.forEach((marker) => marker.remove())
    state.markers = []

    // create markers
    for (const place of places) {
      const [lng, lat] = place.center

      const popup = new mapboxgl.Popup({
        offset: [0, -45]
      }).setLngLat([lng, lat]).setHTML(`
          <h4>${ place.text }</h4>
          <p>${ place.place_name }</p>
        `)

      const marker = new mapboxgl.Marker({ color: '#259b33' })
        .setLngLat([lng, lat])
        .setPopup(popup)
        .addTo(state.map!)

      state.markers.push(marker)
    }
  }
}

export default mutation
