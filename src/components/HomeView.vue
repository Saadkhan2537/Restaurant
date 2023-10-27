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
    <tr v-for="item in restaurant" :key=item.id>
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.contact }}</td>
        <td>{{ item.address }}</td>
        <td>
            <router-link :to="'/updateresto/'+item.id">Update</router-link>/
            <Button v-on:click="deleteRestaurant(item.id)">Delete</Button>
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
        HeaderView
    },
    data() {
        return {
            name: '',
            restaurant: ''

        }

    },
    methods: {
        async deleteRestaurant(id) 
        {
            try {
                const response = await axios.delete('http://localhost:3000/restaurant/' +id);
                if (response.status == 201) {
                    this.loadData();
                }
                 //console.log('Response:', response.data);
                // Handle success or do something with the response data
            } catch (error) {
                console.error('Error updating restaurant:', error.message);
                // Handle the error, show a message to the user, etc.
            }
        }
    },
    async loadData() {
        this.loadData()
    },
    async mounted() {
        let users = localStorage.getItem('user-info');
        this.name = JSON.parse(users).name;
        if (!users) {
            this.$router.push({
                name: 'SignUp'
            })
        }
        let result = await axios.get("http://localhost:3000/restaurant");
        this.restaurant = result.data;

    }
}
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
