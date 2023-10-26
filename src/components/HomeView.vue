<template>
<HeaderView />
<h1> Welcome {{ name }} to the Home page </h1>
<table class="table">
    <tr><td>Id</td><td>Name</td><td>Contact</td><td>Address</td></tr>
    <tr v-for="item in restaurant" :key=item.id>
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.contact }}</td>
        <td>{{ item.address }}</td>
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
            restaurant:''

        }

    },

    async mounted() {
        let users = localStorage.getItem('user-info');
        this.name = JSON.parse(users).name;
        if (!users) {
            this.$router.push({
                name: 'SignUp'
            })
        }
        let result= await axios.get("http://localhost:3000/restaurant");
        this.restaurant=result.data;
        

    }
}
</script>

<style>
.table{
  border: 1px solid; 
}
.table td{
  border: 1px solid;
  width: 160px;
  height: 40px; 
}
</style>
