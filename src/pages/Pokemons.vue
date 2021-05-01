<template>
  <Layout>
    <div>
      <header class="flex justify-evenly place-items-center bg-gray-300">
        <div class=" space-y-2 p-4">
          <h1 class="p-2">Pokemon API</h1>
          <p class="p-2">Select pokemon to retrieve info about'em</p>
        </div>
        <div class="p-4" v-if="actualPokemon">
          <p>{{ actualPokemon.name }}</p>
          <div class="flex w-60">
            <g-image
              class="h-36"
              :src="actualPokemon.sprites.front_default"
            ></g-image>
            <g-image
              class="h-36"
              :src="actualPokemon.sprites.back_default"
            ></g-image>
          </div>
          <p v-for="(type, index) in actualPokemon.types" :key="index">
            Type: {{ type.type.name }}
          </p>
        </div>
      </header>
      <Loader v-if="isLoaderActive" />
      <div v-else class="flex justify-center py-4">
        <ul class="flex flex-wrap space-x-1 w-8/12">
          <li v-for="pokemon in pokemons" :key="pokemon.name">
            <button
              class="shadow-lg p-2"
              @click="getSpecificPokemon(pokemon.name)"
            >
              {{ pokemon.name }}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
</template>

<script>
import axios from "axios";
import Loader from "../components/Loader";

export default {
  components: {
    Loader,
  },
  data() {
    return {
      mainURL: "https://pokeapi.co/api/v2/pokemon?limit=2000",
      mainURLsingle: "https://pokeapi.co/api/v2/pokemon",
      pokemons: null,
      actualPokemon: null,
      isLoaderActive: false,
    };
  },
  methods: {
    async showInitialPokemons() {
      await axios.get(this.mainURL).then((res) => {
        this.pokemons = res.data.results;
        // console.log(this.pokemons);
      });
    },
    async getSpecificPokemon(name) {
      this.isLoaderActive = !this.isLoaderActive;
      await axios.get(`${this.mainURLsingle}/${name}`).then((res) => {
        const { name, sprites, types } = res.data;
        this.actualPokemon = { name, sprites, types };
        console.log(this.actualPokemon);
        this.isLoaderActive = !this.isLoaderActive;
      });
    },
  },
  beforeMount() {
    this.showInitialPokemons();
  },
};
</script>

<style></style>
