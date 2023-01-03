<template>
  <div class="searchbar-container">
    <input class="form-control" type="text" placeholder="Search places" />

    <SearchResults />
  </div>
</template>

<script lang="ts" src="./SearchBar.ts"></script>

<style scoped>
.searchbar-container {
  position: fixed;
  top: 30px;
  left: 30px;
  background-color: white;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  width: 250px;
  overflow: hidden;
  border-radius: 5px;
  padding: 5px;
}
</style>
