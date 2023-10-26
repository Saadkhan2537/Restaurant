<template>
<HeaderView />
<h1> Welcome to Update Restaurant  </h1>
</template>

<script>
import HeaderView from './HeaderView.vue'
export default {
    name: 'UpdateRes',
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
