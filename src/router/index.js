import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import IPFS from '@/components/IPFS'
import PICS from '@/components/PICS'
import TTVIP from '@/components/TTVIP'

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/IPFS',
      name: 'IPFS',
      component: IPFS
    },
    {
      path: '/PICS',
      name: 'PICS',
      component: PICS
    },
    {
      path: '/TTVIP',
      name: 'TTVIP',
      component: TTVIP
    }
  ]
});

window.onload=function(){

}
