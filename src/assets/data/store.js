import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
    searchText: "",
    loading: true,
    API_URL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=8000',
    cards: null,
    fetchCard(url) {
            axios.get(url)
                .then(response => {
                    this.cards = response.data.data
                    this.loading = false
                })
                .catch(err => {
                    console.log(err);
                    console.error(err.messagge);
                })
        }
})