<template>
  <div
    class="w-40 h-40 rounded-full circle m-auto flex justify-center place-items-center border-6 shadow-2xl border-transparent bg-gradient-to-br from-red-300 via-purple-500 to-pink-600"
  >
    <div
      class="w-12 h-12 rounded-full bg-gradient-to-bl from-yellow-500 via-red-200 to-purple-900"
    ></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.circle {
  animation: grow 0.5s infinite;
}

@keyframes grow {
  0% {
    transform: scale(0.3);
  }
  100% {
    transform: scale(1);
  }
}
</style>
