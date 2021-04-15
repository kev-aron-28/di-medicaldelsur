<template>
    <div class="slider-container" >
        <agile ref="main" :options="options1">
        <div class="slide">
            <div class="img-slider-main">
                
                <img src="../../assets/img/slider/imagen1.png" alt="" srcset="">
            
            </div>
        </div>
        <div class="slide">
            <div class="img-slider-main">
                <img src="../../assets/img/slider/imagen2.png" alt="" srcset="">
            </div>
        </div>
        <div class="slide">
            <div class="img-slider-main">
                <img src="../../assets/img/slider/imagen3.png" alt="" srcset="">
            </div>
        </div>
        <div class="slide">
            <div class="img-slider-main">
                <img src="../../assets/img/slider/imagen4.png" alt="" srcset="">
            </div>
        </div>
        <div class="slide">
            <div class="img-slider-main">
                <img src="../../assets/img/slider/imagen5.png" alt="" srcset="">
            </div>
        </div>
        <div class="slide">
            <div class="img-slider-main">
                <img src="../../assets/img/slider/imagen6.png" alt="" srcset="">
            </div>
        </div>

        <div class="slide">
            <div class="img-slider-main">
                <img src="../../assets/img/slider/imagen7.png" alt="" srcset="">
            </div>
        </div>

        <div class="slide">
            <div class="img-slider-main">
                <img src="../../assets/img/slider/imagen8.png" alt="" srcset="">
            </div>
        </div>

        <div class="slide">
            <div class="img-slider-main">
                <img src="../../assets/img/slider/imagen9.png" alt="" srcset="">
            </div>
        </div>
    </agile>
   
    <agile ref="thumbnails" :as-nav-for="[$refs.main]" :options="options2" class="slider2">
        <div class="slide">
            <div class="img-slider" @click="$refs.thumbnails.goTo(0)" >
                <img src="../../assets/img/slider/imagen1.png" alt="" srcset="">
            </div>
        </div>
        <div class="slide">
            <div class="img-slider" @click="$refs.thumbnails.goTo(1)">
                <img src="../../assets/img/slider/imagen2.png" alt="" srcset="">
            </div>
        </div>
        <div class="slide">
            <div class="img-slider" @click="$refs.thumbnails.goTo(2)">
                <img src="../../assets/img/slider/imagen3.png" alt="" srcset="">
            </div>
        </div>
        <div class="slide">
            <div class="img-slider" @click="$refs.thumbnails.goTo(3)">
                <img src="../../assets/img/slider/imagen4.png" alt="" srcset="">
            </div>
        </div>
        <div class="slide">
            <div class="img-slider" @click="$refs.thumbnails.goTo(4)">
                <img src="../../assets/img/slider/imagen5.png" alt="" srcset="">
            </div>
        </div>
        <div class="slide">
            <div class="img-slider" @click="$refs.thumbnails.goTo(5)">
                <img src="../../assets/img/slider/imagen6.png" alt="" srcset="">
            </div>
        </div>

        <div class="slide">
            <div class="img-slider">
                <img src="../../assets/img/slider/imagen7.png" alt="" srcset="">
            </div>
        </div>

        <div class="slide">
            <div class="img-slider">
                <img src="../../assets/img/slider/imagen8.png" alt="" srcset="">
            </div>
        </div>

        <div class="slide">
            <div class="img-slider">
                <img src="../../assets/img/slider/imagen9.png" alt="" srcset="">
            </div>
        </div>
    </agile>
    </div>
</template>

<script>
import { VueAgile } from 'vue-agile'

export default {
    name: 'Slider',
    components: {
        agile: VueAgile
    },
    data () {
    return {
        options1: {
        infinite: true,
        autoplaySpeed:"5000",
        dots:false,
        navButtons:false ,
        autoplay: true,
        slidesToShow:"1",
        responsive: [
            {
                breakpoint: 320,
                settings:{
                     slidesToShow: 1
                }
            },
            {
                breakpoint: 799,
                settings: {
                    slidesToShow: "2"
                }
            },
             {
                breakpoint: 1023,
                settings: {
                    slidesToShow: "3"
                }
            }
        ]   
        },

        options2:{
        infinite: true,
        autoplaySpeed:"5000",
        dots:true,
        navButtons:false ,
        autoplay: true,
        slidesToShow:"4",
        responsive: [
            {
                breakpoint: 319,
                settings:{
                     slidesToShow: "2"
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: "3"
                }
            },
            {
                breakpoint: 949,
                settings: {
                    slidesToShow: "4"
                }
            },
           
            
        ]   
        }
        }

        
  },


}
</script>

<style>

    .img-slider{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
    .slider2{
        margin-top:20px;
        background: rgba(165, 247, 255, .3);
    }
    .img-slider img{
        /* width: 300px; */
        height: 100%;
    }

    .img-slider-main{
        display: flex;
        justify-content: center;
    }


     @media screen and (min-width:320px){
         .img-slider img{
             width:120px;
             height: 120px;
         }

         .img-slider-main img{
            width: 300px;
            height: 300px;
         }
     }

     @media screen and (min-width:1699px){
         .img-slider img{
             width:250px !important;
             height: 250px !important;
         }

         .img-slider-main img{
            width: 350px !important;
            height: 350px  !important;
        }
     }
</style>