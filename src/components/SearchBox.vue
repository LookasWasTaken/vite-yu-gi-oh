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
        <select v-model="store.searchArchetype" class="form-select" aria-label="Default select example">
            <option selected>Choose Archetype...</option>
            <option value="1">Ancient Gear</option>
            <option value="2">Blue-Eyes</option>
            <option value="3">Cyber Dragon</option>
            <option value="4">Dark Magician</option>
            <option value="5">Egyptian God</option>
            <option value="6">Elemental Hero</option>
            <option value="7">Toon</option>
            <option value="8">Utopia</option>
        </select>
    </div>
</template>