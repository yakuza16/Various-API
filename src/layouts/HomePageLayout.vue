<template>
  <div
    class="layout-home-page bg-gradient-to-l from-purple-300 via-red-300 to-yellow-300"
  >
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Navigation from "../components/Navigation";
export default {
  components: {
    Navigation,
  },
};
</script>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout-home-page {
  max-width: 100vw;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
