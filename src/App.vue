<template>
  <div id="app">
    <navbar />

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/navbar";

export default {
  components: { Navbar },
};
</script>
