<template>
  <div class="phrase-1">
    <p v-scroll-reveal.reset="{ delay: 250,  origin: 'top', distance: '250px' }">Pregunta por precios y promociones</p>
    
  </div>
</template>

<script>
export default {
name:"Phrase_1"
}
</script>

<style>
.phrase-1{
    margin-top:120px;
    width:100%;
    height:200px;
    display:flex;
    align-items:center;
    justify-content: center;
    background-color:#ADE8ED;
}
</style>