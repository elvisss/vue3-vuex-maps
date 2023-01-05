import { createApp } from 'vue'
import mapboxgl from 'mapbox-gl'

import App from './App.vue'
import store from './store'
import router from './router'

import './assets/main.css'

if (!navigator.geolocation) {
  throw new Error('your brower does not support geolocation')
}

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN

const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#app')
