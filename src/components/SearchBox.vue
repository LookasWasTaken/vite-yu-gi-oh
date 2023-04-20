<script>
import axios from "axios";
import { store } from "../assets/data/store";

export default {
    name: "SearchBox",
    emits: ['filter'],
    components: {
    },
    data() {
        return {
            store,
        }
    },
    mounted() {
        axios
            .get('https://db.ygoprodeck.com/api/v7/archetypes.php')
            .then(response => {
                store.archetypes = response.data;
            })
    },
}
</script>

<template>
    <div class="search">
        <select v-model="store.archetype" @change="$emit('filter')" class="form-select" aria-label="Default select example">
            <option value="" selected>Choose Archetype...</option>
            <option :value="arch.archetype_name" v-for="arch in store.archetypes">{{ arch.archetype_name }}</option>
        </select>
    </div>
</template>