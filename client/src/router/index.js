import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import LoadingScreen from '@/components/LoadingScreen'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
			component: Welcome
    },
    {
      path: '/loadingScreen',
      name: 'LoadinScreen',
      component: LoadingScreen
    }
  ]
})