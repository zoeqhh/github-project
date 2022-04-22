import { DashBoard, Detail, Login } from './pages'

const routes = [{
  path: '/dashboard:store',
  title: 'Dashboard',
  component: DashBoard,
  isLogin: true,
},
{
  path: '/detail/:store_fullName',
  title: 'Detail',
  component: Detail,
  isLogin: true,
},
{
  path: '/login',
  title: 'Login',
  component: Login,
  isLogin: false,
},
]

export default routes
