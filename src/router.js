import {createRouter, createWebHistory} from 'vue-router'
import Home from './pages/HomeView.vue'

const routes=[

  {
path:'/',
name:"home",
component:Home


  }
]
const router=createRouter({
  routes:routes,
  history:createWebHistory()
})
export default router