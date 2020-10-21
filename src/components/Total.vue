<template>
  <div>
    <h1>Total de ventas</h1>
    <h2>Tus juegos comprados:</h2>
    <ul>
      <li v-for="(number, game) in totalGamesSold" :key="game.id">{{game}} - {{number}}</li>
    </ul>
  </div>
</template>

<script>
import{
  mapGetters
} from 'vuex'
export default {
  computed: {
    ...mapGetters(['totalGamesSold'])
  }
}
</script>

<style>

</style>