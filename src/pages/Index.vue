<template>
  <HomePageLayout>
    <div class="h-screen">
      <h1 class="py-16 text-center text-4xl font-extrabold text-indigo-900">
        Check out a few projects that use API
      </h1>
      <div
        class="bg-gradient-to-r from-purple-300 via-red-300 to-yellow-300 w-full h-2/3 flex justify-center place-items-center rounded-3xl"
      >
        <Navigation class="text-6xl" />
      </div>
    </div>
  </HomePageLayout>
</template>

<script>
import Navigation from "../components/Navigation";
import HomePageLayout from "../layouts/HomePageLayout";
export default {
  components: {
    Navigation,
    HomePageLayout,
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
