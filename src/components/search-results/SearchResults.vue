<script lang="ts" src="./SearchResults.ts"></script>

<template>
  <div v-if="isLoadingPlaces" class="alert alert-primary text-center">
    <h5>Loading</h5>
    <p>Wait please...</p>
  </div>

  <template v-if="!isLoadingPlaces && places.length">
    <ul class="list-group mt-3">
      <li
        v-for="place in places"
        :key="place.id"
        @click="onPlaceClick(place)"
        class="list-group-item list-group-item-action text-start"
        :class="{ active: place.id === activePlace }"
      >
        <h5 class="fs-6">{{ place.text }}</h5>
        <p>{{ place.place_name }}</p>
        <div class="text-end">
          <button
            class="btn btn-sm"
            :class="
              place.id === activePlace ? 'btn-outline-light' : 'btn-outline-primary'
            "
          >
            Directions
          </button>
        </div>
      </li>
    </ul>
  </template>
</template>

<style scoped>
li {
  cursor: pointer;
}

p {
  font-size: 0.75rem;
}
</style>
