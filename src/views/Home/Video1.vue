<template>
  <div class="video1-container" v-scroll-reveal.reset="{ delay: 250,  origin: 'left'}">
    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/SSJSQ7nWM6Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</template>

<script>
export default {
name:"Video1"
}
</script>

<style>
.video1-container{
    margin-top:120px;    
    width:100%;
    height:520px;
    display:flex;
    justify-content: center;
    align-items:center;
}
</style>