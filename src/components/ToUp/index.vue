<template>
  <div class="toUp_container">
      <font-awesome-icon :icon="['fas', 'arrow-up']" :style="{ color: '#FFFFFF' }" size="2x" class="img-icon" @click="up()"/>
  </div>
</template>

<script>
export default {
    name:"ToUp",
    data(){
        return{

        }
    },

    methods: {
        handleScroll(){
            let up = document.querySelector(".toUp_container")
            if(document.documentElement.scrollTop > 100){
                up.style.display = "block"
            } else {
                up.style.display = "none"
            }
        },
        up(){
                window.scrollTo({
                    top:0,
                    behavior: "smooth"
            })
        }
    },

    created(){
        window.addEventListener("scroll", this.handleScroll)
    },

     destroyed (){
         window.removeEventListener("scroll", this.handleScroll)
     }

}
</script>
