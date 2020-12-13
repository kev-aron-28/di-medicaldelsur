<template>
  <div class="main">
    <img-top></img-top>
    <mision></mision>
    <vision></vision>
    <values></values>
    <brands></brands>
  </div>
</template>

<script>
import ImgTop from "@/views/Acerca/ImgTop"
import Mision from "@/views/Acerca/Mision"
import Vision from "@/views/Acerca/Vision"
import Values from "@/views/Acerca/Values"
import Brands from "@/views/Acerca/Brands"
export default {
  name:"Acerca",
  components:{
  ImgTop,
  Mision,
  Vision,
  Values,
  Brands
  },

  created () {
        window.scrollTo({
                    top:0,
                    behavior: "smooth"
            })
        document.getElementById("menu").classList.toggle("is-active")
    }
}
</script>

<style>

</style>