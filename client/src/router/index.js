import Vue from 'vue'
import Router from 'vue-router'
import Add from '../components/Add.vue'
import Hello from '../components/Hello.vue' 


Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Hello',
			component: Hello
		},
		{
			path: '/review/add',
			name: 'Add',
			component: Add
		}
	]
})
