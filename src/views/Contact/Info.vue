<template>
  <div class="information-container">
      <div class="form-title">
              <h1>Comunicate con nosotros</h1>
          </div>
      <div class="form-information">
          <form @submit.prevent="sendEmail">
              <label for="fname">Nombre:</label>
              <input type="text" name="user_name" id="name" placeholder="Nombre"  required>
              <label for="companyn">Correo:</label>
              <input type="email" name="user_email" id="email" placeholder="tucorreo.com"  required>
              <label for="">Telefono:</label>
              <input type="number" name="phone" id="phone" placeholder="Telefono" required >
              <label for="mensaje">Escribenos:</label>
              <textarea name="message" id="message" cols="40" rows="2" placeholder="Tu mensaje" required ></textarea>
              <input type="submit" value="Enviar" class="button">
          </form>

          <div class="information-contact">
              <div class="contact-item">
                  <img src="../../assets/img/mail.png" alt="" srcset="">ventas1@dimedicaldelsur.mx
              </div>
              <div class="contact-item">
                  <img src="../../assets/img/phone.png" alt="telefono" srcset="">5572616849
              </div>
              <div class="contact-item">
                <img src="../../assets/img/clock.png" alt="tiempo" srcset="">Lunes - viernes, 9:00 - 18:00
              </div>
              <div class="contact-social">
                  <a href="https://www.facebook.com/Di-medical-del-Sur-107056794344427/" target="_blank"><img src="../../assets/img/facebook.png" alt="logo facebook"></a>
                  
                  <a href="https://www.instagram.com/dimedicaldelsur/" target="_blank"><img src="../../assets/img/instagram.png" alt="logo instragram"></a>
                  
              </div>
          </div>
      </div>
  </div>
</template>

<script>

import emailjs from 'emailjs-com';
export default {
name:"Info",
data(){
    return {
        data:{
            from_name: "",
            to_name: "Di-medical del sur",
            reply_to: "",
            phone: "",
            message: ""
        }
    }
},

methods:{
    sendEmail(e){
         emailjs.sendForm("service_k6gtj3o", "template_1rvjdjq", e.target, "user_m8Kqz8nGCMoWEn5UVk552")
                .then((result) => {
                    console.log('SUCCESS!', result.status, result.text)
                     this.$swal('Mensaje enviado correctamente',"En breve nuestro equipo de trabajo responderá tu email", "succes")
                }, (error) => {
                    console.log('FAILED...', error)
                    this.$swal('Hello Vue world!!!')
                });
        },

        

    }
}

</script>

<style>
.information-container{
    margin-top:200px;
    display: flex;
    flex-direction:column;
    justify-content:space-evenly;
    width:100%;
    height:500px;
    /* margin-bottom:1000px; */
}


.form-information form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.form-title{
        text-align: center;
    }

form label{
    margin-top:10px;
}
form input {
    outline:none;
    border: none;
    border-bottom: 1px solid grey;
    margin-top:15px;
}

.contact-item{
    margin-top:20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.contact-item img{
    margin-right: 10px;
}

.contact-social{
    margin-top:20px;
    display: flex;
    justify-content:center;
    align-items:center;
}

.information-contact{
    display: flex;
    flex-direction:column;
    align-items: center;
}

.button:hover{
    background-color: #007984;
    color:white;
    transition:.1s;
}
</style>