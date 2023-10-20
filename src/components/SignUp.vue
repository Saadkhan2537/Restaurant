<template>
<div class="register">
    <img class="img" src="..\assets/images/sign-up.png" />
    <br>
    <input v-model="name" class="inputf" type="text" placeholder="Enter Name" /><br>
    <input v-model="email" class="inputf" type="text" placeholder="Enter Email" /><br>
    <input v-model="password" class="inputf" type="password" placeholder="Enter Password" /><br>
    <button v-on:click="signUp">Sign Up</button><br>
    <router-link to="login"> Login</router-link>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'SignUp',
    data() {
        return {
            name: '',
            email: '',
            password: ''

        }

    },
    methods: {

        async signUp() {
            console.warn("sign up successfully", this.name, this.email, this.password)
            let result = await axios.post("http://localhost:3000/user", {
                name: this.name,
                email: this.email,
                password: this.password
            });
            if (result.status == 201) {

                localStorage.setItem("user-info", JSON.stringify(result))
                this.$router.push({
                    name: 'HomeView'
                })
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
