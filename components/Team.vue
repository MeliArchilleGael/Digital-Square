<template>
  <div class="service-container">
    <div class="icon-box text-center px-3 py-2">
      <img class="rounded-circle team-img h-50" src="../assets/img/logo.png" alt="">
      <p class="pt-2">Gael</p>
      <p class="pb-2">Devellopeur et chef de project</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Team"
}
</script>

<style scoped>
.service-container {
  flex-basis: 20%;
  padding: 10px;
  border: 1px solid;
  border-radius: 10px;
}
.icon-box {
  height: 100%;
}
.team-img{
  border: 1px solid var(--primary);
}
</style>
