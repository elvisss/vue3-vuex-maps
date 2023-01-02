import { createApp } from 'vue'
import mapboxgl from 'mapbox-gl'

import App from './App.vue'
import store from './store'
import router from './router'

import './assets/main.css'

if (!navigator.geolocation) {
  throw new Error('your brower does not support geolocation')
}

mapboxgl.accessToken = 'pk.eyJ1IjoiZWx2aXNzcyIsImEiOiJjbDE1ODNkZDkyZHRjM2NxaDAzZGxuMmppIn0.PMjWBq1hgOE2hZDefcDejw';

const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#app')
