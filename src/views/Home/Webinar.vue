<template>
  <div class="modal-container">
      <span class="close" @click="close()">&times;</span>
      <div class="modal-content">
        <img src="../../assets/img/Webinar.jpg" alt="" srcset="">
      </div>
  </div>
</template>

<script>
export default {
name:"Webinar",
data(){
  return {

  }
},

methods: {
  close(){
    const modal = document.getElementsByClassName("modal-container")[0];
    modal.style.display = "none";
  }
},

mounted(){
  const modal = document.getElementsByClassName("modal-container")[0];
  modal.style.display = "block";
  console.log(modal);
},

created () {
    window.addEventListener('click', this.close);
},

destroyed () {
    window.removeEventListener('click', this.close);
},

}
</script>

<style>
.modal-container{
  position:fixed;
  display:none;
  z-index:4;
  left:0;
  top:0;
  width:100%;
  height:100%;
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.9);
}

.modal-content {
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height:100%;
  max-width: 700px;
}

.modal-content img{
  width:100%;
  height:100%;
}

.modal-content{
  animation-name: zoom;
  animation-duration: 0.6s;
}

@keyframes zoom {
  from {transform:scale(0)}
  to {transform:scale(1)}
}

.close{
  font-size:100px;
  position:absolute;
  top:0;
  right:0;
  margin-right:10px;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}



@media screen  and (max-width:700px){
  
  
    .modal-content {
      width: 100%;
      height:100%;
      max-width: 700px;
    }

  .modal-content img{
      width:100vw !important;
      height:100vh !important;
  }
}
</style>