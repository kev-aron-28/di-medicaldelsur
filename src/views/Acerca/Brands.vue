<template>
  <div class="slider-container" >
    <agile ref="main" :options="options1">
        <div class="slide">
            <div class="img-slider-main-brands">
                <img src="../../assets/img/slider/resmed.png" alt="">
            </div>       
        </div> 
        <div class="slide">
            <div class="img-slider-main-brands">
                <img src="../../assets/img/slider/Fisher1.png" alt="">
            </div>       
        </div> 
        <div class="slide">
            <div class="img-slider-main-brands">
                <img src="../../assets/img/slider/salter1.png" alt="">
            </div>       
        </div> 
    </agile>

    <agile ref="thumbnails" :as-nav-for="[$refs.main]" :options="options2" class="slider2">
        <div class="slide">
            <div class="img-slider-brands" >
                <img src="../../assets/img/slider/sunmed.png" alt="" srcset="">
            </div>
        </div>
        <div class="slide">
            <div class="img-slider-brands"  >
                <img src="../../assets/img/slider/Rusch.png" alt="" srcset="">
            </div>
        </div>
        <div class="slide">
            <div class="img-slider-brands"  >
                <img src="../../assets/img/slider/pahsco.png" alt="" srcset="">
            </div>
        </div>
         <div class="slide">
            <div class="img-slider-brands"  >
                <img src="../../assets/img/slider/lma.png" alt="" srcset="">
            </div>
        </div>
        <div class="slide">
            <div class="img-slider-brands"  >
                <img src="../../assets/img/slider/aerogen1.png" alt="" srcset="">
            </div>
        </div>
        <div class="slide">
            <div class="img-slider-brands"  >
                <img src="../../assets/img/slider/geotek1.png" alt="" srcset="">
            </div>
        </div>
        <div class="slide">
            <div class="img-slider-brands"  >
                <img src="../../assets/img/slider/halyard-health.png" alt="" srcset="">
            </div>
        </div>
    </agile>
  </div>
</template>

<script>
import { VueAgile } from 'vue-agile'

export default {
    name: 'Brands',
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
  }
}
</script>

<style>

    .img-slider-brands{
        width: 80%;
        height: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
    .slider2{
        margin-top:20px;
        background: rgba(165, 247, 255, .3);
    }
    .img-slider-brands img{
        /* width: 300px; */
        height: 100%;
    }

    .img-slider-main-brands{
        display: flex;
        justify-content: center;
    }

    


     @media screen and (min-width:320px){
         .img-slider-brands img{
             width:120px !important;
             height: 90px !important;
         }

         .img-slider-main-brands img{
            width: 220px !important;
            height: 160px !important;
         }
     }

     @media screen and (min-width:1699px){
         .img-slider-brands img{
             width:250px !important;
             height: 250px !important;
         }

         .img-slider-brands img{
            width: 350px !important;
            height: 350px  !important;
        }
     }
</style>