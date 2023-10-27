<template>
    <HeaderView />
    <h1> Welcome {{ name }} to the Home page </h1>
    <table class="table">
      <tr>
        <td>Id</td>
        <td>Name</td>
        <td>Contact</td>
        <td>Address</td>
        <td>Action</td>
      </tr>
      <tr v-for="item in restaurant" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.contact }}</td>
        <td>{{ item.address }}</td>
        <td>
          <router-link :to="'/updateresto/' + item.id">Update</router-link>
          <button @click="deleteRestaurant(item.id)">Delete</button>
        </td>
      </tr>
    </table>
  </template>
  
  <script>
  import HeaderView from './HeaderView.vue';
  import axios from 'axios';
  
  export default {
    name: 'HomeView',
    components: {
      HeaderView,
    },
    data() {
      return {
        name: '',
        restaurant: [],
      };
    },
    methods: {
      async deleteRestaurant(id) {
        // Remove the item locally to provide a quick visual response
        const index = this.restaurant.findIndex((item) => item.id === id);
        if (index !== -1) {
          this.restaurant.splice(index, 1);
        }
  
        // Send the delete request in the background
        try {
          const response = await axios.delete('http://localhost:3000/restaurant/' + id);
          if (response.status === 200) {
            // Successful delete, no further action needed
          }
        } catch (error) {
          console.error('Error deleting restaurant:', error.message);
          // Handle the error, show a message to the user, etc.
        }
      },
  
      async loadData() {
        // Load data from the server
        let users = localStorage.getItem('user-info');
        this.name = JSON.parse(users).name;
        if (!users) {
          this.$router.push({
            name: 'SignUp',
          });
        }
        let result = await axios.get('http://localhost:3000/restaurant');
        this.restaurant = result.data;
      },
    },
  
    async mounted() {
      this.loadData();
    },
  };
  </script>
  
  <style>
  .table {
    border: 1px solid;
  }
  
  .table td {
    border: 1px solid;
    width: 160px;
    height: 40px;
  }
  </style>
  
