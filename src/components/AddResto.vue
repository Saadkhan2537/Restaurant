<template>
<HeaderView />
<h1> Welcome to the Add Resaurant page </h1>
</template>

<script>
import HeaderView from './HeaderView.vue'
export default {
    name: 'AddResto',
    components:{ 
    HeaderView
    },

    mounted() {
        let users = localStorage.getItem('user-info');
        if (!users) {
            this.$router.push({
                name: 'SignUp'
            })
        }

    }
}
</script>

<style>

    </style>
