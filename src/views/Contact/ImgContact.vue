<template>
  <div class="img-content-container">
      <div class="img-contact">
        <p v-scroll-reveal.reset="{ delay: 250,  origin: 'top', distance: '250px' }">Contactanos</p>
      </div>
  </div>
</template>

<script>
export default {
name:"ImgContact",

}
</script>

<style>
.img-contact{
    background-image: url("../../assets/img/ImageForback.jpg");
    background-size: cover;
    background-attachment: fixed;
    height: 400px;
    background-repeat: no-repeat;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
}

</style>