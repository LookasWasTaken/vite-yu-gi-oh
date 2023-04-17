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

<style lang="scss" scoped>
</style>