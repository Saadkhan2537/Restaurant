<template>

<div class="nav">

    <router-link to="/">Home</router-link>
    <router-link to="add">Add Restaurant </router-link>
    <router-link to="update">Update Restaurant </router-link>
    <a v-on:click="logout" href="#">Logout</a>

</div>


</template>


<script> 
export default {

name:'HeaderView',
methods:{

logout(){

localStorage.clear();
this.$router.push({name:'LoginView'})


}

}


}
</script>
<style>
.nav {
    padding: 15px 0;
    background-color: black;
    overflow: hidden;
    height: 50px;
   
} 
.nav a {
    color: white;
    text-align: center;
    text-decoration:none;
    margin-right:5px;
    padding: 10px 14px;
}
.nav a:hover{

    background-color: #ddd;
    color: #222;
}
</style>