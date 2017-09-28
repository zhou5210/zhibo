import Vue from 'vue'
import Router from 'vue-router'
import Ifooter from '@/components/footer'
import Iview from '@/components/admin/view'
import Itypography from '@/components/admin/typography'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Iview',
      component: Iview 
    },
    {
      path: '/footer',
      name: 'Ifooter',
      component: Ifooter
     
    },
    {
      path: '/typography',
      name: 'Itypography',
      component: Itypography
     
    }
  ]
})
