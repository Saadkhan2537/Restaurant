<template>
<HeaderView />

<form class="register">
    <h2>Add Resaurant</h2>
    <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name">
    <input type="text" name="address" placeholder="Enter Address" v-model="restaurant.address">
    <input type="text" name="contatc" placeholder="Enter Contatc No" v-model="restaurant.contact">
    <button v-on:click="addRestaurant">Add New Restaurant</button>
</form>
</template>

<script>
import HeaderView from './HeaderView.vue'
import axios from 'axios';

export default {
    name: 'AddResto',
    components: {
        HeaderView
    },
    data() {
        return {
            restaurant: {
                name: '',
                address: '',
                contact: ''
            }
        }
    },
   async AddRestaurant() {
        //console.warn(this.restaurant)
        const result=await axios.post("http://localhost:3000/restaurant",
        {
            name:this.restaurant.name,
            contact:this.restaurant.contact,
            address:this.restaurant.address,
        });
        console.warn('Result',result);
    }, 
    mounted() {
        let users = localStorage.getItem('user-info');
        if (!users) {
            this.$router.push({
                name: 'SignUp'
            });
        }
    }
}
</script>


<style>

    </style>
