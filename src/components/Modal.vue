<template>
  <div
    v-if="this.$store.state.isModalOpen"
    class="w-full h-full bg-green-900 bg-transparent flex place-items-center shadow-2xl"
  >
    <div
      class="flex justify-items-center place-items-center space-y-4 p-4 flex-col"
    >
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </p>
      <button
        @click="closeModal"
        class="xl:font-extrabold xl:text-6xl xl:w-1/4 text-red-300 bg-gray-800 p-2 select-none focus:outline-none"
      >
        X
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$store.commit("onOffModal");
    },
  },
};
</script>

<style></style>
