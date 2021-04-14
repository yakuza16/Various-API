<template>
  <Layout>
    <div>
      <h1>Star Wars API</h1>
      <table
        class="flex flex-col justify-items-center place-items-center bg-gray-300 text-xs lg:text-base my-6"
      >
        <thead class="bg-gray-500 w-full text-center border-2 border-black">
          <tr class="flex justify-items-center place-items-center">
            <th class="w-1/5">Name</th>
            <th class="w-1/5">Eyes Color</th>
            <th class="w-1/5">Gender</th>
            <th class="w-1/5">Hair Color</th>
            <th class="w-1/5">Height</th>
            <th class="w-1/5">Mass</th>
          </tr>
        </thead>
        <tbody class="w-full text-center">
          <tr
            class="border-2 border-black"
            v-for="character in allCharacters"
            :key="character.name"
          >
            <td class="w-1/5 border-2 border-black name">
              {{ character.name }}
            </td>
            <td class="w-1/5 border-2 border-black">
              {{ character.eye_color }}
            </td>
            <td class="w-1/5 border-2 border-black">{{ character.gender }}</td>
            <td class="w-1/5 border-2 border-black">
              {{ character.hair_color }}
            </td>
            <td
              class="w-1/5 border-2 border-black"
              :class="{
                aboseSeventy: character.mass > 70,
                underSeventy: character.mass < 70,
              }"
            >
              {{ character.mass }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </Layout>
</template>

<script>
import axios from "axios";

export default {
  metaInfo: {
    title: "SWAPI",
  },
  data() {
    return {
      baseURL: "https://swapi.dev/api",
      allCharacters: [],
    };
  },
  methods: {
    async getAllCharacters() {
      let counter = 1;
      let response = null;
      do {
        response = (await axios.get(
          `${this.baseURL}/people/?page=${counter++}`
        )).data;
        this.allCharacters.push(...response.results);
        this.allCharacters.sort((a, b) =>
          a.name > b.name ? 1 : b.name > a.name ? -1 : 0
        );
      } while (response.next);
    },
  },
  beforeMount() {
    this.getAllCharacters();
  },
};
</script>

<style>
tr:nth-child(even) {
  background-color: #b8c7bf;
}

.aboseSeventy {
  color: rgb(197, 42, 42);
  font-weight: bold;
}
.underSeventy {
  color: rgb(22, 161, 22);
  font-weight: bold;
}

.name::first-letter {
  font-weight: bold;
}

.name:hover::first-letter {
  color: red;
}

tr:hover td::first-letter {
  color: red;
  text-decoration: underline;
  font-weight: bold;
}
</style>
