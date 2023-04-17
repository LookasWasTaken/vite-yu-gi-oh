<script>
import { store } from "./assets/data/store";
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
export default {
    components: {
        AppHeader,
        AppFooter,
        AppMain,
    },
    data() {
        return {
            store
        }
    },
    methods: {

        //moved in global state
        /* callApi(url) {
            axios.get(url)
                .then(response => {
                    console.log(response.data);
                    this.store.characters = response.data.results
                    this.store.indo = response.data.info
                    this.store.loading = false
                })
                .catch(err => {
                    console.log(err);
                    console.error(err.messagge);
                })
        } */
    },
    mounted() {
        store.fetchCard(store.API_URL)
    },
}
</script>

<template>
    <AppHeader></AppHeader>
    <AppMain></AppMain>
    <AppFooter></AppFooter>
</template>

<style></style>