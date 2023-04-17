<script>
import CardItem from './CardItem.vue';
import { store } from "../assets/data/store";

export default {
    name: "CardList",
    components: { CardItem },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <section class="container">
        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4">
            <!-- cardItem -->
            <CardItem :card="card" v-for="card in store.cards" v-if="!store.loading"></CardItem>
            <div class="loader" v-else>
                Loading...
            </div>

        </div>
    </section>
</template>