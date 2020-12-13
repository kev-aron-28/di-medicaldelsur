<template>
  <div class="values-container">
      <div class="values-title">
          <p v-scroll-reveal.reset="{ delay: 250 }">Nuestros valores</p>
      </div>
      <div class="values">
          <div class="values-content">
              <ul>
                  <li><img src="../../assets/img/DmcNoBack.png" alt="">Responsabilidad</li>
                  <li><img src="../../assets/img/DmcNoBack.png" alt="">Trabajo en equipo</li>
                  <li><img src="../../assets/img/DmcNoBack.png" alt="">Felicidad</li>
                  <li><img src="../../assets/img/DmcNoBack.png" alt="">Honestidad</li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
export default {
name:"Values"
}
</script>

<style>
.values .values-content ul li{
    display:flex;
    justify-content:center;
    align-content: center;
    margin-top: 20px;
    color:#2E9594;

}

.values .values-content ul li img{
    width:20px;
    margin-right: 10px;
}
.values-container{
    margin-top:120px;
}

.values-container .values-title{
    text-align: center;
}

</style>