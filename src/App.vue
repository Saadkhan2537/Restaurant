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
.register, .LoginView {
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

.register button, .login button {
    border: 1px solid skyblue;
    color: #fff;
    background-color: skyblue;
}

</style>
