<script>
import CardList from "./CardList.vue"
import { store } from "../assets/data/store";

export default {
    name: 'AppMain',
    components: { CardList },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <main>
        <div class="search"></div>
        <!-- search -->
        <CardList :cards="store.characters"></CardList>

    </main>
</template>

<style lang="scss">
main {
    background-color: blue;
    .search{
        background-color: green;
    }
}
</style>