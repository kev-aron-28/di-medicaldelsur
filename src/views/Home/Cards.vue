<template>
    <div class="cards-container">
        <div class="card" v-scroll-reveal.reset="{ delay: 250 }">
              <header></header>
              <div class="content-card">
                <font-awesome-icon :icon="['fas', 'check']" :style="{ color: '#007984' }" size="3x" class="img-icon"/>
                <h2>Calidad</h2>
              </div>
        </div>
        
         <div class="card" v-scroll-reveal.reset="{ delay: 250 }">
              <header></header>
              <div class="content-card">
                <font-awesome-icon :icon="['fas', 'award']" :style="{ color: '#007984' }" size="3x" class="img-icon"/>
                <h2>Garantía</h2>
              </div>
        </div>

         <div class="card" v-scroll-reveal.reset="{ delay: 250 }">
              <header></header>
              <div class="content-card">

                <font-awesome-icon :icon="['fas', 'phone-volume']" :style="{ color: '#007984' }" size="3x" class="img-icon"/>
                <h2>Servicio</h2>
              </div>
        </div>
      
    </div>
</template>
<script>
export default {
    name: 'Cards'
}
</script>
<style>
  .cards-container{
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      height: 200px;
      margin-top:100px;
  }

  .cards-container .card{
      width: 300px;
      height: 200px;
      display: flex;
      flex-direction:column;
      border-radius: 5;
      background-color: rgba(151, 215, 221, .8);
      margin-bottom: 10px;
      z-index:2;
      -webkit-box-shadow: 10px 10px 17px -10px rgba(0,0,0,0.75);
      -moz-box-shadow: 10px 10px 17px -10px rgba(0,0,0,0.75);
      box-shadow: 10px 10px 17px -10px rgba(0,0,0,0.75);
  }

  .card .content-card{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
  }

  .card header{
    width:100%;
    height:50px;
    background:#007984;
  }
  .card .content-card h2{
    margin-top:10px;
  }

</style>