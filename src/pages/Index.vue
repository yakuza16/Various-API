<template>
  <Layout>
    <div class="h-screen">
      <h1 class="my-4 text-center text-4xl font-extrabold text-indigo-900">
        Check out a few projects that use API
      </h1>
      <div
        class="bg-gradient-to-r from-purple-300 via-red-300 to-yellow-300 w-full h-2/3 flex justify-center place-items-center rounded-3xl"
      >
        <Navigation class="text-2xl" />
      </div>
    </div>
  </Layout>
</template>

<script>
import Navigation from "../components/Navigation";
export default {
  components: {
    Navigation,
  },
  metaInfo: {
    title: "Various API projects",
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
