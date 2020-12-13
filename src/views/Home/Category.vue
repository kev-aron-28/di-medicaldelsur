<template>
    <div class="category-container">
        <hr class="line"/>
        <div class="category-content">
            <div class="category-title">
                <p>Nos especializamos en: </p>
            </div>
            <div class="card-category" v-scroll-reveal.reset="{ delay: 250 ,origin:'top', distance: '100px'}">
                <div class="category-img"> 
                    <font-awesome-icon :icon="['fas', 'syringe']" :style="{ color: '#028E9B' }" size="3x" class="img-icon"/>
                </div>
                <h3>Anestesia </h3>
            </div>
             <div class="card-category" v-scroll-reveal.reset="{ delay: 250, origin:'bottom', distance: '100px'}">
                <div class="category-img">
                    <font-awesome-icon :icon="['fas', 'head-side-mask']" :style="{ color: '#028E9B' }" size="3x" class="img-icon"/>
                </div>
                <h3>Inhaloterapia </h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Category'
}
</script>