import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
	{
		path: '/',
		alias: '/home',
		component: Home,
	},
]

export default createRouter({
	history: createWebHistory(),
	routes,
})
