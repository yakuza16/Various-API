<template>
  <div
    class="layout-home-page bg-gradient-to-br from-green-200 via-green-400 to-green-700"
  >
    <div>
      <slot name="nav"></slot>
    </div>
    <main class="flex flex-wrap lg:flex-nowrap text-center p-8">
      <slot />
      <slot name="aside"></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

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
  min-height: 100vh;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
