import HomeView from './components/HomeView.vue'
import SignUp from './components/SignUp.vue'
import {createRouter, createWebHistory} from 'vue-router'
import LoginView from './components/LoginView.vue'
import AddResto from './components/AddResto'
import UpdateResto from './components/UpdateResto'

const routes=[


    {
        name:'HomeView',
        component:HomeView,
        path:'/'
    },
    {

        name:'SignUp',
        component:SignUp,
        path:'/sign-up'

    },
    {

        name:'LoginView',
        component:LoginView,
        path:'/login'

    },
    {

        name:'AddResto',
        component:AddResto,
        path:'/addresto'

    },
    {

        name:'update',
        component:UpdateResto,
        path:'/updateresto'

    }
]
 const router=createRouter({

history:createWebHistory(),
routes

 })
  
 export default router