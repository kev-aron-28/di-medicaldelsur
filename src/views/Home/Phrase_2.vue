<template>
  <div class="phrase2_container">
      <hr>
      <p v-scroll-reveal.reset="{ delay: 250,  origin: 'left'}">Lo más selecto de las mejores marcas para el mercado hospitalario. </p>
      <font-awesome-icon :icon="['fas', 'hospital']" :style="{ color: '#028E9B' }" size="4x" class="img-icon"/>
  </div>
</template>

<script>
export default {
    name:"Phrase_2"
}
</script>

<style>

</style>