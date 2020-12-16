<template>
    <div class="footer-container">
        <div class="footer-content">
            <p> &copy; Di-medical del sur</p>
            <hr>
            <div class="quick-links">
                <ul class="foot-links">
                   <li class="">
                    <router-link class="router" to="/">Inicio</router-link>
                   </li>
                  <li class="">
                    <router-link class="router" to="/acerca">Acerca</router-link>
                  </li>
                  <li class="">
                    <router-link class="router" to="/contacto">Contacto</router-link>
                  </li>
                </ul>
            </div>
            <div class="social-links">
                <a href="https://www.facebook.com/Di-medical-del-Sur-107056794344427/" target="_blank" ><font-awesome-icon :icon="['fab', 'facebook-square']" :style="{ color: 'white' }" size="lg"/></a>
                <a href="https://www.instagram.com/dimedicaldelsur/" target="_blank" ><font-awesome-icon :icon="['fab', 'instagram-square']" :style="{ color: 'white' }" size="lg"/></a>
                <a href="https://api.whatsapp.com/send?phone=525619914477&text=Hola,%20busco%20informes%20" target="_blank" ><font-awesome-icon :icon="['fab', 'whatsapp-square']" :style="{ color: 'white' }" size="lg"/></a>
                <a href="https://www.youtube.com/channel/UCypmZxJDQKJOjlovUh9P1Lg" target="_blank"><font-awesome-icon :icon="['fab', 'youtube-square']" :style="{ color: 'white' }" size="lg"/></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"footerComponent"
}
</script>

<style>
.foot-links li .router{
    color:white;
}
.foot-links li .router:hover{
    text-decoration-line: underline;
    transition:.2s;
}
.social-links a{
    margin: 10px;
}
</style>