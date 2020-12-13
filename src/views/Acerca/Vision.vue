<template>
  <div class="vision-container">
      <div class="vision-title">
          <p v-scroll-reveal.reset="{ delay: 250 }">Nuestra visión</p>
      </div>
    <div class="vision">
        <div class="vision-content">
            <p v-scroll-reveal.reset="{ delay: 250 ,origin: 'top', distance: '250px'}">Ser el proveedor preferido de nuestros clientes, consolidar el liderazgo, marcar la diferencia ofreciendo innovación de productos para el area de la salud y ser una empresa sustentable </p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
name:"Vision"
}
</script>

<style>
.vision-container{
    margin-top:120px;
}
.vision-container .vision-title{
    text-align:center;
}
</style>