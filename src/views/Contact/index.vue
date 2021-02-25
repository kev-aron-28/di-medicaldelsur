<template>
  <div class="contact-container">
      <img-contact></img-contact>
      <info></info>
      <Phrase_1></Phrase_1>
      <ubication></ubication>

  </div>
</template>

<script>
import ImgContact from "@/views/Contact/ImgContact";
import Info from "@/views/Contact/Info.vue";
import Phrase_1 from "@/views/Contact/Phrase_1"
import Ubication from "@/views/Contact/Ubication"
export default {
name:"Contact",
components:{
    ImgContact,
    Info,
    Ubication,
    Phrase_1
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