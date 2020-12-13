<template>
    <div class="catalogs-container">
        <p v-scroll-reveal.reset="{ delay: 250 }">Marcas que distribuimos</p>
        <div class="catalog">
            <img src="@/assets/img/Fisher.png" alt="Fisher" srcset="">
        </div>
        <div class="catalog">
            <img src="@/assets/img/resmed.png" alt="Resmed">
        </div>
        <div class="catalog">
            <img src="@/assets/img/salter.png" alt="Salter">
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },

   
}
</script>