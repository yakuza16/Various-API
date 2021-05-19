<template>
  <JokesLayout>
    <template #nav>
      <div class="flex justify-center">
        <Navigation />
      </div>
    </template>
    <template #aside>
      <div class=" w-full lg:w-1/4 p-8 relative">
        <Modal class="absolute inset-0" />
        <button
          @click="getSingleJoke"
          class="p-4 shadow-xl rounded-lg border-green-900 border-4 focus:outline-none focus:ring-2 xl:text-2xl font-extrabold transition duration-500 ease-in-out bg-white text-green-900 hover:text-green-400 hover:bg-green-900 hover:shadow-2xl hover:border-green-200"
        >
          Draw joke
        </button>
      </div>
    </template>
    <div class="w-full lg:w-3/4 p-8 xl:h-96">
      <h1 class="font-extrabold my-2 xl:text-4xl">Random Joke generator</h1>
      <Loader v-if="isLoaderActive" />
      <p class="my-6" v-else>
        Actual joke:
        <strong class="block my-6 xl:text-2xl" v-if="actualJoke.setup">
          {{ actualJoke.setup }}
          {{ actualJoke.delivery }}
        </strong>
        <strong class="block my-6 xl:text-2xl" v-else>{{
          actualJoke.joke
        }}</strong>
      </p>
    </div>
    <template #footer>
      <p class="text-center pb-12 xl:text-2xl">
        You read:
        <span
          class="font-extrabold"
          :class="[jokesCount % 2 ? 'text-white' : 'text-black']"
          >{{ jokesCount }}</span
        >
        joke<span v-if="jokesCount > 1">s</span>
      </p>
      <p>Store to: {{ count }}</p>
    </template>
  </JokesLayout>
</template>

<script>
import axios from "axios"
import Loader from "../components/Loader"
import Modal from "../components/Modal"
import Navigation from "../components/Navigation"
import JokesLayout from "../layouts/JokesLayout"

export default {
  components: {
    Loader,
    Navigation,
    JokesLayout,
    Modal,
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
          this.actualJoke = { setup, delivery }
        } else {
          const { joke } = res.data
          this.actualJoke = { joke }
        }
      })
      this.isLoaderActive = !this.isLoaderActive
      this.jokesCount++
      this.counterForModal++
      if (this.jokesCount % 2 === 0) {
        this.openModal()
      }
    },
    openModal() {
      this.$store.commit("onOffModal")
    },
  },
  computed: {
    count() {
      return this.$store.state.count
    },
  },
  beforeMount() {
    this.getSingleJoke()
  },
}
</script>

<style></style>
