<template>
  <div class="bg-green-400 w-40 h-40 rounded-full circle m-auto"></div>
</template>

<script>
export default {};
</script>

<style>
.circle {
  animation: grow 0.3s infinite;
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
