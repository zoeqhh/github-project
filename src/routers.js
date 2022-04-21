import {DashBoard,Detail} from './pages'

const routes=[
  {
    path: '/dashboard',
    component: DashBoard,
    title: 'Dashboard',
  },
  {
    path:'/detail/:store_fullName',
    component:Detail,
    title:'Detail'
  },
]

export default routes
