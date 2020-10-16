<template>
  <div>
      <h2>Busca tu juego</h2>
      <input type="text" v-model="searchId">
      <ul>
          <li v-for="game in searchByIdGames" :key="game.id">
            {{game.id}} | {{game.name}} | {{game.stock}} | {{game.price}} | {{game.color}} | {{game.outstanding}}
          </li>
      </ul>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
  data() {
    return {searchId: ''}
  },
}
</script>

<style>

</style>