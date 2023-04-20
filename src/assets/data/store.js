import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  loading: true,
  API_URL: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
  cards: null,
  pathCustom: "?num=40&offset=2481",
  archetype: "",
  archetypes: null,
  fetchCard(url) {
    axios
      .get(url)
      .then((response) => {
        this.cards = response.data.data;
        this.loading = false;
      })
      .catch((err) => {
        console.log(err);
        console.error(err.messagge);
      });
  },
});
