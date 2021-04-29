<template>
  <Layout>
    <div>
      <h1>Pokemon API</h1>
      <div class="flex">
        <ul class="flex flex-col w-3/4">
          <li v-for="pokemon in pokemons" :key="pokemon.name">
            <button @click="getSpecificPokemon(pokemon.name)">
              {{ pokemon.name }}
            </button>
          </li>
        </ul>
        <div class="bg-gray-400" v-if="actualPokemon">
          <p>{{ actualPokemon.name }}</p>
          <div class="flex w-60">
            <g-image
              class="w-full"
              :src="actualPokemon.sprites.front_default"
            ></g-image>
            <g-image :src="actualPokemon.sprites.back_default"></g-image>
          </div>
          <p v-for="(type, index) in actualPokemon.types" :key="index">
            Type: {{ type.type.name }}
          </p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      mainURL: "https://pokeapi.co/api/v2/pokemon?limit=2000",
      mainURLsingle: "https://pokeapi.co/api/v2/pokemon",
      pokemons: null,
      actualPokemon: null,
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
      await axios.get(`${this.mainURLsingle}/${name}`).then((res) => {
        const { name, sprites, types } = res.data;
        this.actualPokemon = { name, sprites, types };
        console.log(this.actualPokemon);
      });
    },
  },
  beforeMount() {
    this.showInitialPokemons();
  },
};
</script>

<style></style>
