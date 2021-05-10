<template>
  <div
    class="layout bg-gradient-to-l from-purple-300 via-red-300 to-yellow-300"
  >
    <header class="flex flex-col justify-items-center place-items-center py-4">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <Navigation class="text-sm" />
    </header>
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
import Navigation from "../components/Navigation"
export default {
  components: {
    Navigation,
  },
}
</script>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  background: linear-gradient(to left, #e66465, #9198e5);
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.nav__link {
  margin-left: 20px;
}
</style>
