<script>
import { store } from "../assets/data/store";

export default {
    name: 'AppHeader',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <header>
        <div class="container d-flex justify-content-center align-items-center py-2">
            <img class="img-fluid" width=350 src="../assets/img/yugilogo.svg" alt="Yu-Gi-Oh Logo">
        </div>
    </header>
</template>

<style lang="scss">
header{
    background-color: red;
}
</style>