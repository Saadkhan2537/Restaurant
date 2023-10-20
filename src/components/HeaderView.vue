<template>

<div class="nav">

    <a href="a">Home</a>
    <a href="a">Add Restaurant</a>
    <a href="a">Update</a>
    <a href="a">Logout</a>

</div>


</template>


<script> 
export default {

name:'HeaderView'


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