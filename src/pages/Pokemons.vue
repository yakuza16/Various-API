<template>
  <Layout>
    <div class="relative">
      <div class="fixed right-1/4 bottom-1/4">
        <Loader v-if="isLoaderActive" />
      </div>
      <header
        class="flex justify-evenly place-items-center bg-gradient-to-r from-purple-300 via-red-300 to-yellow-300"
      >
        <div
          class=" space-y-2 p-4 flex flex-col justify-center place-items-start w-1/2"
        >
          <h1 class="p-2">Pokemon API</h1>
          <p class="p-2">Select pokemon to retrieve info about'em</p>
          <label class="p-2" for="pokemon_name">Search pokemon</label>
          <input
            ref="pokemonSearchInput"
            @input="searchPokemon"
            id="pokemon_name"
            type="text"
            placeholder="search pokemon"
            class="px-2 py-1 bg-gradient-to-r from-purple-800 via-red-600 to-yellow-500 font-extrabold text-indigo-200"
          />
        </div>
        <Loader v-if="isLoaderActive" />
        <div
          class="p-4 flex flex-col justify-items-center place-items-center w-1/2"
          v-else-if="actualPokemon"
        >
          <p>{{ actualPokemon.name }}</p>
          <div class="flex">
            <g-image
              v-if="actualPokemon.sprites.front_default"
              class="h-36"
              :src="actualPokemon.sprites.front_default"
            ></g-image>
            <g-image
              v-if="actualPokemon.sprites.back_default"
              class="h-36"
              :src="actualPokemon.sprites.back_default"
            ></g-image>
          </div>
          <p v-for="(type, index) in actualPokemon.types" :key="index">
            Type: {{ type.type.name }}
          </p>
        </div>
      </header>
      <div class="flex justify-center py-4">
        <ul class="flex flex-wrap space-x-1 w-8/12">
          <li v-for="pokemon in pokemons" :key="pokemon.name">
            <button
              ref="pokemonBtn"
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
      });
    },
    async getSpecificPokemon(name) {
      this.isLoaderActive = !this.isLoaderActive;
      await axios.get(`${this.mainURLsingle}/${name}`).then((res) => {
        const { name, sprites, types } = res.data;
        this.actualPokemon = { name, sprites, types };
        this.isLoaderActive = !this.isLoaderActive;
      });
      if (window.pageYOffset > 0) {
        window.scrollTo(0, 0);
      }
    },
    searchPokemon() {
      let searchedPokemonName = this.$refs.pokemonSearchInput.value;
      this.$refs.pokemonBtn.forEach((btn) => {
        if (!btn.innerHTML.includes(searchedPokemonName)) {
          btn.classList.add("hidden");
        } else {
          btn.classList.remove("hidden");
        }
      });
    },
  },
  beforeMount() {
    this.showInitialPokemons();
  },
};
</script>

<style></style>
