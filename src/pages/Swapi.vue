<template>
  <Layout>
    <div>
      <h1>Star Wars API</h1>
      <table
        class="border-collapse m-2 text-sm lg:text-base rounded-xl overflow-hidden shadow-2xl"
      >
        <thead>
          <tr class="bg-green-400 text-white text-left font-bold">
            <th class="p-2">Name</th>
            <th class="p-2">Eyes Color</th>
            <th class="p-2">Gender</th>
            <th class="p-2">Hair Color</th>
            <th class="p-2">Height</th>
            <th class="p-2">Mass</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>heej</td>
          </tr>
          <tr
            class="p-2 border-b-2 border-gray-400"
            v-for="character in allCharacters"
            :key="character.name"
          >
            <td class="p-2">
              <span ref="letters" class="text-2xl">{{
                character.name[0]
              }}</span>
              {{ character.name }}
            </td>
            <td
              class="p-2"
              :class="{
                invisible:
                  character.eye_color === 'unknown' ||
                  character.eye_color === 'n/a',
              }"
            >
              {{ character.eye_color }}
            </td>
            <td
              class="p-2"
              :class="{
                aboveSeventy: character.gender === 'male',
                underSeventy: character.gender === 'female',
                invisible:
                  character.gender === 'unknown' || character.gender === 'n/a',
              }"
            >
              {{ character.gender }}
            </td>
            <td
              class="p-2"
              :class="{
                invisible:
                  character.hair_color === 'unknown' ||
                  character.hair_color === 'n/a',
              }"
            >
              {{ character.hair_color }}
            </td>
            <td
              class="p-2"
              :class="{
                invisible: character.height === 'unknown',
              }"
            >
              {{ character.height }}
            </td>
            <td
              class="p-2"
              :class="{
                aboveSeventy: character.mass > 70,
                underSeventy: character.mass < 70,
                invisible: character.mass === 'unknown',
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
  background-color: #f3f3f3;
}

.aboveSeventy {
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

tr:hover td {
  background-color: rgba(126, 172, 161, 0.644);
}

tr:last-of-type {
  border-bottom: 2px solid #009879;
}
</style>
