<template>
  <nav
    class="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-red-500 to-yellow-500 p-4 font-extrabold text-xl"
  >
    <g-link
      class="nav__link shadow-xl hover:text-indigo-900"
      v-for="(route, index) in routes"
      :key="index"
      :to="route.path"
    >
      <span v-if="route.path.length > 5">{{
        route.path.substring(1, route.path.length - 1).toUpperCase()
      }}</span>
    </g-link>

    <!-- <button @click="route">Click</button> -->
  </nav>
</template>

<script>
export default {
  data() {
    return {
      routes: this.$router.options.routes,
    };
  },
  methods: {
    route() {
      return this.routes.pop();
    },
  },
  // computed: {
  //   onlyRoutes() {
  //     this.routes = this.routes.pop();
  //   },
  // },
};
</script>

<style>
.active {
  color: rgba(49, 46, 129);
}
</style>
