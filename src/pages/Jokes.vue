<template>
  <JokesLayout>
    <template #nav>
      <div class="flex justify-center">
        <Navigation />
      </div>
    </template>
    <template #aside>
      <div class="bg-red-50 w-full lg:w-1/4 p-8">Aside</div>
    </template>
    <div class="bg-red-400 w-full lg:w-3/4 p-8">
      tutaj właściwy kontent joków
    </div>
    <template #footer>
      footer
    </template>
  </JokesLayout>
</template>

<script>
import axios from "axios"
import Loader from "../components/Loader"
import Navigation from "../components/Navigation"
import JokesLayout from "../layouts/JokesLayout"

export default {
  components: {
    Loader,
    Navigation,
    JokesLayout,
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style></style>
