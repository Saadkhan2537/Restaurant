<template>
<HeaderView />

<form class="register">
    <h2>Update Resaurant</h2>
    <input type="text" name="name" v-model="restaurant.name">
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
    components: {
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

    methods: {
        async updateRestaurant() {
            try {
                const response = await axios.post('http://localhost:3000/restaurant/' + this.$route.params.id, {
                    name: this.restaurant.name,
                    contact: this.restaurant.contact,
                    address: this.restaurant.address,
                });
                if (response.status == 201) {
                    this.$router.push({
                        name: 'HomeView'
                    });
                }
                // console.log('Response:', response.data);
                // Handle success or do something with the response data
            } catch (error) {
                console.error('Error updating restaurant:', error.message);
                // Handle the error, show a message to the user, etc.
            }
        },
    },

    async mounted() {
        let users = localStorage.getItem('user-info');

        if (!users) {
            this.$router.push({
                name: 'SignUp'
            });
        }

        try {
            const result = await axios.get('http://localhost:3000/restaurant/' + this.$route.params.id);
            this.restaurant = result.data;
        } catch (error) {
            console.error('Error fetching restaurant:', error.message);
            // Handle the error, show a message to the user, etc.
        }
    }
}
</script>

<style>

    </style>
