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
            <option value="1">Elemental Hero</option>
            <option value="2">Blue-Eyes</option>
            <option value="3">Dark Magician</option>
            <option value="4">Ancient Gear</option>
            <option value="5">Cyber Dragon</option>
            <option value="6">Toon</option>
            <option value="7">Utopia</option>
        </select>
    </div>
</template>