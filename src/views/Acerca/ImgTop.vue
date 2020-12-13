<template>
  <div class="img-top">
      <div class="title-about">
          <p v-scroll-reveal.reset="{ delay: 250,  origin: 'top', distance: '250px' }">Conocenos</p>
      </div>
      <div class="story-about">
          <p>Empresa fundada en el año 2018 dedicada a la importación y distribución de equipo médico y material de curación, <br> especializados en las áreas de terapia respiratoria, anestesia, entre otras.</p>
      </div>
 </div>
</template>

<script>
export default {
name:"ImgTop"
}
</script>

<style>
.img-top{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    width: 100%;
    background-image: url("../../assets/img/ImageForBack2.jpg");
     background-size: cover;
     height: 400px;
     background-repeat: no-repeat;
     background-attachment: fixed;
}

.story-about{
    text-align: center;
    margin-top:30px;
    padding:5px;
}


</style>