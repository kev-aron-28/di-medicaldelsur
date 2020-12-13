<template>
    <div class="main-content">
        <img-card></img-card>
        <cards></cards>
        <phrase></phrase>
        <category></category>
        <catalogs></catalogs>
        <flayer-1></flayer-1>
        <slider></slider>
        <Phrase_2></Phrase_2>
        <Phrase_3></Phrase_3>
    </div>    
</template>

<script>
import ImgCard from "@/views/Home/ImgCard.vue"
import Cards from "@/views/Home/Cards.vue"
import Phrase from "@/views/Home/Phrase.vue"
import Category from "@/views/Home/Category.vue"
import Catalogs from "@/views/Home/Catalogs.vue"
import Flayer1 from "@/views/Home/Flayer1.vue"
import Phrase_2 from "@/views/Home/Phrase_2.vue"
import Phrase_3 from "@/views/Home/Phrase_3.vue"
import Slider from '../Home/Slider.vue'
export default {
    components:{
        ImgCard,
        Cards,
        Phrase,
        Category,
        Catalogs,
        Flayer1,
        Phrase_2,
        Phrase_3, 
        Slider
    },

    data(){
        return{

        }
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
