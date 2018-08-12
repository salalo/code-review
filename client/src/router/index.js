import Vue from 'vue'
import Router from 'vue-router'
import Add from '@/components/Add'
import Hello from '@/components/Hello'
import Login from '@/components/LoginForm'


Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Hello',
			component: Hello
		},
		{
			path: '/login',
			name: 'Login',
			component: Login
		},
		{
			path: '/review/add',
			name: 'Add',
			component: Add
		}
	]
})
