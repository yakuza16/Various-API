<template>
  <Layout>
    <div class="py-4">
      <div
        class="text-center bg-gradient-to-l from-purple-300 via-red-300 to-yellow-300"
      >
        <h1>Random User</h1>
        <p>It shows 5 users at the start, scroll down to upload more</p>
      </div>
      <Loader v-if="users.length === 0" />
      <div
        class="flex flex-col place-items-center text-center m-auto border-2 rounded-3xl py-4 my-4 w-1/2 bg-gradient-to-r from-purple-300 via-red-300 to-yellow-300"
        v-for="user in users"
        :key="user.first"
      >
        <div>
          <g-image :src="user.picture.large"></g-image>
        </div>
        <h2>
          {{ user.name.first }}
          {{ user.name.last }}
        </h2>
        <ul>
          <li><strong>Birthday: </strong>{{ formatDate(user.dob.date) }}</li>
          <li>
            <strong>Location:</strong> {{ user.location.city }},
            {{ user.location.state }}
          </li>
        </ul>
      </div>
      <Loader v-if="loaderActive" />
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
  metaInfo: {
    title: "Users",
  },
  data() {
    return {
      users: [],
      loaderActive: false,
    };
  },
  methods: {
    getInitialUsers() {
      axios.get(`https://randomuser.me/api/?results=5`).then((res) => {
        this.users = res.data.results;
      });
    },
    getNextUser() {
      this.loaderActive = !this.loaderActive;
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;
        if (bottomOfWindow) {
          axios.get(`https://randomuser.me/api/`).then((res) => {
            this.users.push(res.data.results[0]);
            this.loaderActive = !this.loaderActive;
          });
        }
      };
    },
    formatDate(dateString) {
      let convertedDate = new Date(dateString);
      return convertedDate.toDateString();
    },
  },
  beforeMount() {
    this.getInitialUsers();
  },
  mounted() {
    this.getNextUser();
  },
};
</script>
