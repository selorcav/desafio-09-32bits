<template>
  <div>
    <p>Hay {{availableGames.length}} juegos con stock</p>
    <list :hasButton="true" :games="availableGames" @sell-product="saleProduct"></list>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import List from "@/components/List";
export default {
    components: {
      List
  },
    computed: {
        ...mapGetters(["availableGames"]),
    },
    methods: {
      ...mapActions(["processSale"]),
      saleProduct(payLoad){
        this.processSale(payLoad.game);
      },
    },
};
</script>

<style>

</style>