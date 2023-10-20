<template>
<div class="LoginView">
    <img class="img" src="..\assets/images/login-image.jpg" />
    <br>
    <input v-model="email" class="inputf" type="text" placeholder="Enter Email" /><br>
    <input v-model="password" class="inputf" type="password" placeholder="Enter Password" /><br>
    <button v-on:click="LoginView">Login</button><br>
    <router-link to="sign-up"> Sign up</router-link>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'LoginView',
    data() {
        return {
            email: '',
            password: ''

        }

    },
    methods: {

async LoginView() {
    let result = await axios.get(`http://localhost:3000/user?email=${this.email}&password=${this.password}`);

    if (result.status === 200 && result.data.length > 0) {
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        this.$router.push({
            name: 'HomeView'
        });
    }
}
},
 mounted() {
      let users = localStorage.getItem('user-info');
      if (users) {
          this.$router.push({
              name: 'HomeView'
          })
      }

  } 


}
</script>

<style>

</style>
