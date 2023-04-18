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
    <div v-if="store.cards" class="found d-flex align-items-center justify-content-between">
        <div class="finder">Founds {{ store.cards.length }} Cards</div>
        <img class="ring img-fluid" width="35" src="../assets/img/magicring.png" alt="Magic Ring">
    </div>
</template>

<style lang="scss"></style>