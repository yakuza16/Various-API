<template>
  <JokesLayout>
    <template #nav>
      <div class="flex justify-center">
        <Navigation />
      </div>
    </template>
    <template #aside>
      <div class="bg-red-50 w-full lg:w-1/4 p-8">
        <button @click="getSingleJoke" class="bg-red-800">Let's roll</button>
      </div>
    </template>
    <div class="bg-red-400 w-full lg:w-3/4 p-8">
      <h1>Random Joke generator</h1>
      <Loader v-if="isLoaderActive" />
      <p v-else>
        Actual joke:
        <strong v-if="actualJoke.setup">
          {{ actualJoke.setup }}
          {{ actualJoke.delivery }}
        </strong>
        <strong v-else>{{ actualJoke.joke }}</strong>
      </p>
    </div>
    <template #footer>
      <p>You read: {{ jokesCount }} jokes</p>
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
    return {
      jokeAPIBaseURL: "https://v2.jokeapi.dev/joke/Any",
      actualJoke: {},
      isLoaderActive: false,
      jokesCount: 0,
    }
  },
  methods: {
    async getSingleJoke() {
      this.isLoaderActive = true
      await axios.get(this.jokeAPIBaseURL).then((res) => {
        if (res.data.setup) {
          const { setup, delivery } = res.data
          //   console.log(setup, delivery)
          this.actualJoke = { setup, delivery }
        } else {
          const { joke } = res.data
          //   console.log(joke)
          this.actualJoke = { joke }
        }
      })
      this.isLoaderActive = !this.isLoaderActive
      this.jokesCount++
    },
  },
  beforeMount() {
    this.getSingleJoke()
  },
}
</script>

<style></style>
