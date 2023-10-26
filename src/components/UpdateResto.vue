<template>
  <HeaderView /> 

<form class="register">
    <h2>Update Resaurant</h2>
    <input type="text" name="name" v-model="restaurant.name" >
    <input type="text" name="address" placeholder="Enter Address" v-model="restaurant.address">
    <input type="text" name="contatc" placeholder="Enter Contatc No" v-model="restaurant.contact">
    <button v-on:click="updateRestaurant">Update Restaurant</button>
</form>
</template>

    
<script>
import HeaderView from './HeaderView.vue';
import axios from 'axios';
export default {
    name: 'UpdateResto',
    components:{ 
    HeaderView
    },

  data() {
    return {
      restaurant: {
        name: '',
        address: '',
        contact: '',
      },
    };
  },
   async mounted() {
        let users = localStorage.getItem('user-info');

        if (!users) {
            this.$router.push({
                name: 'SignUp'
            })
        }
        console.warn(this.$route.params.id);
        const result=await axios.get('http://localhost:3000/restaurant/'+this.$route.params.id);
       // console.warn(result);
       this.restaurant=result.data

    }
}
</script>

    
<style>

    </style>
