<script>
import { store } from "../assets/data/store";

export default {
    name: "CardFounder",
    components: {

    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
<div v-if="store.cards" class="found">Founds {{ store.cards.length }} Cards</div>
</template>