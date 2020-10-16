import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    title: '32bits',
    subtitle: 'Juegos de PC y consolas',
    games:[
      {id: '001', name: 'Sekiro' , stock: 100 , price: 30000 , color: 'red' , outstanding: true},
      {id: '002', name: 'Fifa 21' , stock: 100 , price: 35000 , color: 'blue' , outstanding: false},
      {id: '003', name: 'Gears of war 4' , stock: 100 , price: 15000 , color: 'green' , outstanding: true},
      {id: '004', name: 'Mario Tennis Aces', stock: 100 , price: 35000 , color: 'yellow' , outstanding: false},
      {id: '005', name: 'Bloodborne', stock: 100 , price: 10000 , color: 'blue', outstanding: false },
      {id: '006', name: 'Forza Horizon 4' , stock: 100 , price: 20000 , color: 'red', outstanding: true},
    ]

  },
  getters: {},
  mutations: {},
  actions: {}
});

export default store;
