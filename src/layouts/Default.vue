<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav
        class="nav bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-red-500 to-yellow-500 p-4 font-extrabold text-xl"
      >
        <g-link class="nav__link shadow-xl hover:text-indigo-900" to="/"
          >Home</g-link
        >
        <g-link class="nav__link shadow-xl hover:text-indigo-900" to="/swapi/"
          >SWAPI</g-link
        >
        <g-link class="nav__link shadow-xl hover:text-indigo-900" to="/users/"
          >Users</g-link
        >
        <g-link
          class="nav__link shadow-xl hover:text-indigo-900"
          to="/harrypotter/"
          >Harry Potter</g-link
        >
        <g-link
          class="nav__link shadow-xl hover:text-indigo-900"
          to="/pokemons/"
          >Pokemons</g-link
        >
      </nav>
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

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
