import type { Feature } from '@/interfaces/places'
import mapboxgl, { type LngLatLike } from 'mapbox-gl'
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
          <h4>${place.text}</h4>
          <p>${place.place_name}</p>
        `)

      const marker = new mapboxgl.Marker({ color: '#259b33' })
        .setLngLat([lng, lat])
        .setPopup(popup)
        .addTo(state.map!)

      state.markers.push(marker)
    }

    // crear polyline

    if (state.map?.getLayer('RouteString')) {
      state.map.removeLayer('RouteString')
      state.map.removeSource('RouteString')
      state.distance = undefined
      state.duration = undefined
    }
  },

  setRoutePolyline(state, coords: number[][]) {
    const start = coords[0]
    const end = coords[coords.length - 1]

    // bounds
    const bounds = new mapboxgl.LngLatBounds(
      [start[0], start[1]],
      [start[0], start[1]]
    )

    // add points to bounds
    for (const coord of coords) {
      const newCoord: [number, number] = [coord[0], coord[1]]
      bounds.extend(newCoord)
    }

    state.map?.fitBounds(bounds, {
      padding: 100
    })

    // polyline
    const sourceData: mapboxgl.AnySourceData = {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: coords
            }
          }
        ]
      }
    }

    if (state.map?.getLayer('RouteString')) {
      state.map.removeLayer('RouteString')
      state.map.removeSource('RouteString')
    }

    state.map?.addSource('RouteString', sourceData)

    state.map?.addLayer({
      id: 'RouteString',
      type: 'line',
      source: 'RouteString',
      layout: {
        'line-cap': 'round',
        'line-join': 'round'
      },
      paint: {
        'line-color': 'black',
        'line-width': 3
      }
    })
  },

  setDistanceDuration(state, { distance, duration }: { distance: number, duration: number }) {
    let kms = distance / 1000
    kms = Math.round(kms * 100) / 100

    state.distance = kms
    state.duration = Math.floor( duration / 60 )
  }
}

export default mutation
