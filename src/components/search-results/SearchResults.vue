<script lang="ts" src="./SearchResults.ts"></script>

<template>
  <ul class="list-group mt-3">
    <li
      v-for="place in places"
      :key="place.id"
      class="list-group-item list-group-item-action text-start"
    >
      <h5 class="fs-6">{{ place.text }}</h5>
      <p>{{ place.place_name }}</p>
      <div class="text-end">
        <button class="btn btn-outline-primary">Directions</button>
      </div>
    </li>
  </ul>
</template>

<style scoped>
li {
  cursor: pointer;
}

p {
  font-size: 0.75rem;
}
</style>
