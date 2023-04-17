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
        <div class="container">
            <div class="search">
                <select name="search" id="search">
                    <option value="search">Choose Archetype</option>
                    <option value="search">Alien</option>
                    <option value="search">Dragon</option>
                    <input type="submit" value="Find">
                </select>
            </div>
            <!-- /.search -->
            <div v-if="store.cards" class="found">Founds {{ store.cards.length }} Cards</div>
            <!-- /.found -->
            <CardList :cards="store.characters"></CardList>
        </div>
    </main>
</template>

<style lang="scss">
main {
    background-color: blue;

    .search {
        background-color: green;
    }

    .found {
        background-color: yellow;
    }
}
</style>