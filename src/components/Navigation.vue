<template>
  <nav
    class="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-red-500 to-yellow-500 p-4 font-extrabold flex flex-col justify-items-center place-items-center xl:block"
  >
    <g-link
      class="nav__link shadow-xl hover:text-indigo-900 rounded-xl p-4"
      v-for="(route, index) in routes"
      :key="index"
      :to="route.path"
    >
      <span v-if="route.path.length > 5">{{
        route.path.substring(1, route.path.length - 1).toUpperCase()
      }}</span>
    </g-link>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      routes: this.$router.options.routes,
    }
  },
  methods: {
    deleteLastRoute() {
      for (let i = 0; i <= 2; i++) {
        this.routes.pop()
      }
    },
  },
  beforeMount() {
    if (this.routes.length > 4) {
      this.deleteLastRoute()
    }
  },
}
</script>

<style>
.active {
  color: rgba(49, 46, 129);
}
</style>
