import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
    searchText: "",
    loading: true,
    API_URL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=5500',
    cards: null,
    fetchCard(url) {
            axios.get(url)
                .then(response => {
                    console.log(response.data.data);
                    this.cards = response.data.data
                    this.loading = false
                })
                .catch(err => {
                    console.log(err);
                    console.error(err.messagge);
                })
        }
})