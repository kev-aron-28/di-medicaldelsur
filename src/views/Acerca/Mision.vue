<template>
  <div class="mision-container">
      <div class="mision-title">
          <p v-scroll-reveal.reset="{ delay: 250 }">Nuestra misión</p>
      </div>
      <div class="mision">
          <div class="mision-img" v-scroll-reveal.reset="{ delay: 250,  origin: 'top', distance: '250px' }">
              <img src="../../assets/img/logoEmpresa.jpg" alt="" srcset="">
          </div>
          <div class="mision-content">
              <p>Ofrecer productos para la salud de alta calidad que:</p>
              <ul>
                  <li>Los doctores califiquen a Di-medical como la mejor opción para sus pacientes.</li>
                  <li>Los compradores elijan a Di-medical para sus pacientes.</li>
                  <li>Los empleados de Di-medical se sientan orgullosos de contribuir con su talento en el éxito de nuestros clientes.</li>
                  <li>Ser líderes mediante negocios responsables.</li>
              </ul>
          </div>
      </div>

  </div>
</template>

<script>
export default {
    name:"Mision"
}
</script>

<style>

.mision-container{
    margin-top:120px;
}


.mision-container .mision .mision-img{}
</style>