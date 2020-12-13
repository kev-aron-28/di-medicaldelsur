<template>
    <div class="header-bar">
        <nav id="header">

            <div class="logo">
                <img src="@/assets/img/noBackLogo.png" alt="logo de di-medical del sur" >
            </div>

            <div class="menu-icon" @click="activate()" >
            <font-awesome-icon :icon="['fas', 'bars']" :style="{ color: 'grey' }" size="lg"/>
            </div>
                
            <ul id="menu" class="menu">
                <li class="hvr-underline-from-left">
                    <router-link class="router" to="/" @click="up()">Inicio</router-link>
                </li>
                <li class="hvr-underline-from-left">
                    <router-link class="router" to="/acerca" @click="up()">Acerca</router-link>
                </li>
                <li class="hvr-underline-from-left">
                    <router-link class="router" to="/contacto" @click="up()">Contacto</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'headerBar',
    data(){
        return{
            isActive: true,
        }
    },


    methods:{
        handleScroll(){
            var header = document.getElementById("header");
            var sticky = header.offsetTop;
             if (window.pageYOffset > sticky) {
                    header.classList.add("sticky");
                   header.style.height = "70px"
                } else {
                    header.classList.remove("sticky");
                    header.style.height = "100px"
                }
        },
        activate(){
            var menu = document.getElementById("menu")
            menu.classList.toggle("is-active")
        },
        up(){
             window.scrollTo({
                    top:0,
                    behavior: "smooth"
            })
        }
    },

   created () {
    window.addEventListener('scroll', this.handleScroll);
   },

  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
}
</script>

<style>
    
    .header-bar{
        width:100%;
        display: flex;
        flex-direction: column;
        font-size:1.2rem;
        
    }
    .header-bar nav .logo img{
        width: 160px;
        margin-left:15px;
    }
    .header-bar nav{
        width:100%;
        background: #ADE8ED;
        transition: 0.2s;
        height: 100px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        transition: .2s;
        z-index:3;
    }
    .header-bar nav ul{
        width:100%;
        height: 100%;
        display:flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
    }
    .header-bar nav ul li{
        list-style: none;
        padding:5px;
    }
    .header-bar nav ul li .router {
        text-decoration: none;
        color: #005D66;
    }

    .sticky {
    position: fixed;
    top: 0;   
    }

    .menu-icon{
        display:none;
        border-radius:10px;
        text-align: center; 
    }

    .hvr-underline-from-left {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;
}
.hvr-underline-from-left:before {
  content: "";
  position: absolute;
  z-index: -1;
  left: 0;
  right: 100%;
  bottom: 0;
  background: #2098D1;
  height: 4px;
  -webkit-transition-property: right;
  transition-property: right;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.hvr-underline-from-left:hover:before, .hvr-underline-from-left:focus:before, .hvr-underline-from-left:active:before {
  right: 0;
}






</style>