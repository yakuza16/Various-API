<template>
  <Layout>
    <div>
      <h1>Harry Potter characters API</h1>
      <div
        class="flex flex-col w-1/2 m-auto space-y-4 justify-items-center place-items-center"
      >
        <button
          @click="showHouseCharacters('gryffindor')"
          class="shadow-lg w-1/2 border-2 border-red-500 bg-yellow-600 rounded-lg p-1"
        >
          Gryffindor
        </button>
        <button
          @click="showHouseCharacters('ravenclaw')"
          class="shadow-lg w-1/2 border-2 border-blue-500 bg-blue-200 rounded-lg p-1"
        >
          Ravenclaw
        </button>
        <button
          @click="showHouseCharacters('hufflepuff')"
          class="shadow-lg w-1/2 border-2 border-yellow-500 bg-yellow-200 rounded-lg p-1"
        >
          Hufflepuff
        </button>
        <button
          @click="showHouseCharacters('slytherin')"
          class="shadow-lg w-1/2 border-2 border-green-300 bg-green-500 rounded-lg p-1"
        >
          Slytherin
        </button>
      </div>
      <ul
        class="flex space-x-24 w-1/2 overflow-x-scroll place-items-start my-6 text-center rounded-xl bg-gray-300 m-auto"
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

export default {
  data() {
    return {
      mainURL: "http://hp-api.herokuapp.com/api/characters",
      mainHouseURL: "http://hp-api.herokuapp.com/api/characters/house/",
      houseCharacters: [],
    };
  },
  methods: {
    async showHouseCharacters(house) {
      await axios.get(`${this.mainHouseURL}${house}`).then((res) => {
        this.houseCharacters = res.data;
      });
    },
    async showInitialCharacters() {
      await axios.get(this.mainURL).then((res) => {
        this.houseCharacters = res.data;
      });
    },
  },
  beforeMount() {
    this.showInitialCharacters();
  },
};
</script>

<style></style>
