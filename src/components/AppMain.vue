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
    },
    methods: {
        filterCards(){
            let url;
            if(store.archetype === ""){
                url = `${store.API_URL + store.pathCustom}`
            } else {
                url = `${store.API_URL}?archetype=${store.archetype}`
            }
            store.fetchCard(url)
        }
    }
}
</script>

<template>
    <main>
        <div class="container">
            <SearchBox @filter="filterCards()"></SearchBox>
            <CardFounder></CardFounder>
            <CardList :cards="store.characters"></CardList>
        </div>
    </main>
</template>

<style lang="scss">
</style>