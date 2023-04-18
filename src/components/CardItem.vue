<script>
export default {
    name: 'CardItem',
    props: {
        card: Object
    }
}
</script>

<template>
    <div class="col">
        <div class="my_card text-center h-100">
            <img class="img-fluid" :src="card.card_images[0].image_url" :alt="card.name">
            <div class="text">
                <h4>{{ card.name }}</h4>
                <h6>{{ card.type }}</h6>
                <h6>{{ card.race }}</h6>
            </div>
        </div>
    </div>
</template>