<template>
  <Layout>
    <div>
      <h1>Star Wars API</h1>
      <table
        class="flex flex-col justify-items-center place-items-center bg-gray-300"
      >
        <thead class="bg-gray-500 w-full text-center ">
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
          <tr v-for="character in allCharacters" :key="character.name">
            <td class="w-1/5">{{ character.name }}</td>
            <td class="w-1/5">{{ character.eye_color }}</td>
            <td class="w-1/5">{{ character.gender }}</td>
            <td class="w-1/5">{{ character.hair_color }}</td>
            <td class="w-1/5">{{ character.mass }}</td>
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
        console.log(response);

        this.allCharacters.push(...response.results);
      } while (response.next);
    },
  },
  beforeMount() {
    this.getAllCharacters();
  },
};
</script>
