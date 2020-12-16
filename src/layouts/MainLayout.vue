<template>
    <div class="content">
        <header-bar></header-bar>
        <router-view />
        <social></social>
        <to-up></to-up>
        <footerComponent></footerComponent>
    </div>
</template>
<script>
import headerBar from "@/components/Header/index.vue"
import Social from "@/components/Social/index.vue"
import ToUp from "@/components/ToUp/index.vue"
import footerComponent from "@/components/Footer/index.vue"


export default {
    name: 'MainLayout',
    components:{
        headerBar,
        ToUp,
        Social,
        footerComponent,
    }
}
</script>

<style >
.content{
    height: 100%;
    width: 100%;
}
</style>