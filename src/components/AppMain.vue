<script>
import CardList from "./CardList.vue"
import SearchBox from "./SearchBox.vue"
import CardFounder from "./CardFounder.vue"
import { store } from "../assets/data/store";

export default {
    name: 'AppMain',
    components: { 
        CardList,
        SearchBox,
        CardFounder,
    },
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
            <SearchBox></SearchBox>
            <CardFounder></CardFounder>
            <CardList :cards="store.characters"></CardList>
        </div>
    </main>
</template>

<style lang="scss">
</style>