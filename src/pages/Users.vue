<template>
  <Layout>
    <div>
      <div class="text-center bg-gray-100">
        <h1>Random User</h1>
        <p>It shows 5 users at the start, scroll down to upload more</p>
      </div>
      <div
        class="flex flex-col place-items-center text-center m-auto border-2 rounded-3xl py-4 my-4 w-1/2 bg-gray-200 hover:bg-gray-300"
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
    </div>
  </Layout>
</template>

<script>
import axios from "axios";

export default {
  metaInfo: {
    title: "Users",
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    getInitialUsers() {
      axios.get(`https://randomuser.me/api/?results=5`).then((res) => {
        this.users = res.data.results;
      });
    },
    getNextUser() {
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;
        if (bottomOfWindow) {
          axios.get(`https://randomuser.me/api/`).then((res) => {
            this.users.push(res.data.results[0]);
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
