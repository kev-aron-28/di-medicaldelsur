<template>
    <div class="video_container">
        <iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/o23DlgZryi8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</template>

<script>
export default {
    name:"VideoD"

}
</script>



<style scoped>
    .video_container{
        display:flex;
        align-items: center;
        justify-content:center;
        margin-top:100px;
    }

    @media screen and (min-width: 1439px){
        
        .video_container{
            display:flex;
            align-items: center;
            justify-content:center;
            width:100vw;
            height: 100vh;
        }

        .video{
            width:100%;
            height:100%;
        }
    
    }

</style>