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
        <div class="my_card text-center">
            <img class="img-fluid" :src="card.card_images[0].image_url" :alt="card.name">
            <div class="text">
                <h3>{{ card.name }}</h3>
                <h4>{{ card.type }}</h4>
                <h4>{{ card.frameType }}</h4>
                <h4>{{ card.race }}</h4>
                <h4>{{ card.archetype }}</h4>
            </div>
        </div>
    </div>
</template>