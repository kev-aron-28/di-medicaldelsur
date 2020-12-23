<template>
  <div class="video1-container">
    <video src="../../assets/video/nuevoAño.mp4" controls></video>
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
    height:500px;
    display:flex;
    justify-content: center;
    align-items:center;
}

.video1-container video{
    width:100%;
    height: 100%;
}
</style>