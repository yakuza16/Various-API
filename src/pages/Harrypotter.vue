<template>
  <Layout>
    <div class="py-4">
      <h1>Harry Potter characters API</h1>
      <div
        class="flex flex-col w-1/2 m-auto space-y-4 justify-items-center place-items-center"
      >
        <button
          @click="showHouseCharacters('gryffindor')"
          class="shadow-lg w-3/4 border-2 border-red-500 bg-yellow-600 rounded-lg p-1 xl:w-1/2"
        >
          Gryffindor
        </button>
        <button
          @click="showHouseCharacters('ravenclaw')"
          class="shadow-lg w-3/4 border-2 border-blue-500 bg-blue-200 rounded-lg p-1 xl:w-1/2"
        >
          Ravenclaw
        </button>
        <button
          @click="showHouseCharacters('hufflepuff')"
          class="shadow-lg w-3/4 border-2 border-yellow-500 bg-yellow-200 rounded-lg p-1 xl:w-1/2"
        >
          Hufflepuff
        </button>
        <button
          @click="showHouseCharacters('slytherin')"
          class="shadow-lg w-3/4 border-2 border-green-300 bg-green-500 rounded-lg p-1 xl:w-1/2"
        >
          Slytherin
        </button>
      </div>
      <Loader v-if="isLoaderActive" />
      <ul
        v-else
        class="flex space-x-24 w-full xl:w-1/2 overflow-x-scroll place-items-start place-content-start my-6 text-center rounded-xl bg-gradient-to-r from-purple-300 via-red-300 to-yellow-300 m-auto"
      >
        <li
          class="shadow-sm m-4 w-full"
          v-for="character in houseCharacters"
          :key="character.name"
        >
          <div>
            <p><span>Name: </span>{{ character.name }}</p>
            <p>
              <span v-if="character.patronus">Patronus: </span
              >{{ character.patronus }}
            </p>
            <p v-if="character.ancestry">
              Ancestry: <span>{{ character.ancestry }}</span>
            </p>
            <div class="w-28 m-auto my-2">
              <g-image class="" :src="character.image"></g-image>
              <figcaption>Actor: {{ character.actor }}</figcaption>
            </div>
            <p
              v-if="
                character.wand.wood ||
                  character.wand.core ||
                  character.wand.length
              "
            >
              Wand informations:
              <span
                >{{ character.wand.wood }} -- {{ character.wand.core }} --
                {{ character.wand.length }}</span
              >
            </p>
          </div>
        </li>
      </ul>
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
      mainURL: "https://hp-api.herokuapp.com/api/characters",
      mainHouseURL: "https://hp-api.herokuapp.com/api/characters/house/",
      houseCharacters: [],
      isLoaderActive: false,
    };
  },
  methods: {
    async showHouseCharacters(house) {
      this.isLoaderActive = !this.isLoaderActive;
      await axios.get(`${this.mainHouseURL}${house}`).then((res) => {
        this.houseCharacters = res.data;
        this.isLoaderActive = !this.isLoaderActive;
      });
    },
    async showInitialCharacters() {
      this.isLoaderActive = !this.isLoaderActive;
      await axios.get(this.mainURL).then((res) => {
        this.houseCharacters = res.data;
        this.isLoaderActive = !this.isLoaderActive;
      });
    },
  },
  beforeMount() {
    this.showInitialCharacters();
  },
};
</script>

<style></style>
