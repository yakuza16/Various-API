<template>
  <div v-if="currentWeatherInPoland.timezone">
    <p>This is weather in {{ currentWeatherInPoland.timezone }}</p>
    <ul>
      <li>Wind: {{ currentWeatherInPoland.current.wind_speed }} km/h</li>
      <li>Pressure: {{ currentWeatherInPoland.current.pressure }} hP</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      APIkey: "358063d346bb326880c1d75d2fa36971",
      baseWeatherURL:
        "https://api.openweathermap.org/data/2.5/onecall?lat=52&lon=15",
      currentWeatherInPoland: null,
    }
  },
  methods: {
    async getWeatherData() {
      await axios
        .get(`${this.baseWeatherURL}&appid=${this.APIkey}`)
        .then((res) => {
          console.log(res.data)
          this.currentWeatherInPoland = res.data
          console.log(this.currentWeatherInPoland)
        })
    },
  },
  beforeMount() {
    this.getWeatherData()
  },
}
</script>

<style></style>
