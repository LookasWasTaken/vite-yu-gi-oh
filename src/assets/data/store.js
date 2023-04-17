import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
    searchText: "",
    loading: true,
    API_URL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
    card: null,
    info: null,
    fetchCard(url) {
            axios.get(url)
                .then(response => {
                    console.log(response.data.data);
                    /* this.characters = response.data.results
                    this.info = response.data.info
                    this.loading = false */
                })
                .catch(err => {
                    console.log(err);
                    console.error(err.messagge);
                })
        }
})