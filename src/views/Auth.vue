<template>
  <div class='auth'>
    <button v-on:click="logout">logout</button>
    <h1>Product List</h1>
    <ul class='list'>
      <li v-for="product in products">
        {{product.name}} -price: ${{product.price}}
        </li>
      </ul>
      <div id="example-3">
        <button v-on:click="line()">Sale chart</button>
        <button v-on:click="bar()">Price chart</button>
      </div>

      <DemandChart v-if="showDemand"/>
      <PriceChart v-if="showPrice"/>
  </div>
</template>

<script>
import DemandChart from '@/components/demand-chart';
import PriceChart from '@/components/price-chart';
  export default {
    name: 'auth',

components: {
DemandChart, PriceChart
},

    props: [ 'isAuth' ],

    data () {
      return {
        showDemand: false,
        showPrice: false,
        products: [{
          name: 'Iphone X case',
          price: 100
        }, {
          name: 'Samsung s8 case',
          price: 100
        }, {
          name: 'Iphone Xs case',
          price: 100
        }, {
          name: 'Iphone Xs max case',
          price: 100
        }, {
          name: 'Samsung s9 case',
          price: 100
        }],
      }
    },

    mounted () {
      if ( !this.isAuth ) {
        this.$router.replace({ name: 'index' });
      }
    },

    methods: {
      bar(){

        this.showPrice = !this.showPrice;
      },

      line(){

        this.showDemand = !this.showDemand;
      },
      logout () {
        this.$emit('authenticated', false);
        this.$router.replace({ name: 'index'});
      }

    
    }



  }
</script>