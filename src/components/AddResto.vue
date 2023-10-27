<template>
<HeaderView />

<form class="register">
    <h2>Add Resaurant</h2>
    <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name">
    <input type="text" name="address" placeholder="Enter Address" v-model="restaurant.address">
    <input type="text" name="contact" placeholder="Enter contact No" v-model="restaurant.contact">
    <button v-on:click="addRestaurant">Add New Restaurant</button>
</form>
</template>

<script>
import HeaderView from './HeaderView.vue';
import axios from 'axios';

export default {
  name: 'AddResto',
  components: {
    HeaderView,
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
  methods: {
    async addRestaurant() {
      try {
        const response = await axios.post('http://localhost:3000/restaurant', {
          name: this.restaurant.name,
          contact: this.restaurant.contact,
          address: this.restaurant.address,
        });

        if (response.status == 201) {
                    this.$router.push({
                        name: 'HomeView'
                    });
                }
        // Handle success or do something with the response data
      } catch (error) {
        console.error('Error adding restaurant:', error.message);
        // Handle the error, show a message to the user, etc.
      }
    },
  },
  mounted() {
    const user = localStorage.getItem('user-info');
    if (!user) {
      this.$router.push({
        name: 'SignUp',
      });
    }
  },
};
</script>



<style>

    </style>
