<script>
import { store } from "../assets/data/store";

export default {
    name: "SearchBox",
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
    <div class="search">
        <select class="form-select" aria-label="Default select example">
            <option selected>Choose Archetype...</option>
            <option value="1">Alien</option>
            <option value="2">Dragon</option>
            <option value="3">Spellcaster</option>
        </select>
    </div>
</template>