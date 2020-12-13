<template>
   <div class="phrase3_container" >
        <p v-scroll-reveal.reset="{ delay: 250,origin:'top', distance: '200px'   }">¿Tienes dudas?</p>
        <p v-scroll-reveal.reset="{ delay: 250}">Contactanos, nuestro personal se encuentra capacitado para guiarte y asesorarte en tu compra</p>
        <div class="goto_contact">
            <button ><router-link class="router" to="/contacto">Contacto</router-link></button>
        </div>
    </div>
</template>

<script>
export default {
name: "Phrase_3"
}
</script>

<style>

</style>