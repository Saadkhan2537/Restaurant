<template>
<router-view/>

</template>

<script>


export default {
    name: 'App'
    

}
</script>

<style>
body{
    margin:0px;
    padding:0px;

}
.register, .LoginView .add{
    width: 400px;
    height: 400px;
    text-align: center;
    margin: auto;
    margin-top: 150px;
    width: 50%;
    border: 1px solid green;
    padding: 10px;
    padding-top: 80px;
}

.img {
    height: 100px;
    width: 200px;

}

.inputf {
    margin-bottom: 5px;
}
.register input, .login input , .add input{
width: 300px;
height: 40px;
padding-left: 20px;
display: block;
margin-bottom: 30px;
margin-right: auto;
margin-left: auto;
border: 1px solid skyblue;
}
.register button, .login button {
    border: 1px solid skyblue;
    color: #fff;
    background-color: skyblue;
    width: 320px;
    height: 40px;
    cursor: pointer;
}


</style>
