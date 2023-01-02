<script lang="ts" src="./MapView.ts"></script>

<template>
  <div
    v-if="!isUserLocationReady"
    class="loading-map d-flex justify-content-center align-items-center"
  >
    <div class="text-center">
      <h3>Wait please</h3>
      <span>Locating...</span>
    </div>
  </div>

  <div v-show="isUserLocationReady" class="map-container" ref="mapElement"></div>
</template>

<style scoped>
.loading-map {
  color: white;
  position: fixed;
  /* width: 100vh; */
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.8);
}

.map-container {
  position: fixed;
  width: 100%;
  height: 100vh;
}
</style>
