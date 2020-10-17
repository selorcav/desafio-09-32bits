<template>
  <div>
      <h2>{{totalStock}}</h2>
      <list :games="availableGames"></list>
    <h2>Busca tu juego</h2>
    <input type="text" v-model="searchId" />
    <ul>
      <li v-for="game in searchByIdGames" :key="game.id">
        {{ game.id }}|{{ game.name }}|{{ game.stock }}|{{ game.price }}
      </li>
    </ul>
  </div>
</template>

<script>
import List from "@/components/List";
import { mapGetters} from "vuex";
export default {
  data() {
    return { searchId: "" };
  },
  components: {
      List
  },
  computed: {
    ...mapGetters(["availableGames","searchById", "totalStock"]),
    searchByIdGames() {
      return this.searchById(this.searchId)
    },
  },
};
</script>

<style>
</style>