<script>
import { store } from "../assets/data/store";

export default {
    name: 'AppMain',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <main>
        <h1>sono un main</h1>
    </main>
</template>

<style lang="scss">
main{
    background-color: blue;
}
</style>