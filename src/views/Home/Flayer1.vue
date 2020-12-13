<template>
    <div class="flayer-1">
        <p v-scroll-reveal.reset="{ delay: 250,  origin: 'top', distance: '250px' }">Solicita tu cotización, <br>estamos a tu servicio</p>
    </div>
    
</template>

<script>
export default {
    name: 'Flayer1',

}
</script>

<style scoped>
    .flayer-1{
        background-image: url("../../assets/img/img1.png");
    
         
    }
</style>