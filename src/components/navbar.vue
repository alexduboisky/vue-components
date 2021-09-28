<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" :to="mainPage"
        >VueComponents
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link
            v-for="route of availableRoutes"
            :key="route.name"
            class="nav-link active"
            aria-current="page"
            :to="route.path"
          >
            {{ route.name }}
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { routes } from "@/router";

export default {
  data: () => ({
    routes,
  }),

  computed: {
    mainPage: () => routes.find((route) => route.name === "Home"),
    availableRoutes: () => routes.filter((route) => route.name !== "NotFound"),
  },
};
</script>
